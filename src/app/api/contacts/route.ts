import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('morokutti-design');
    const collection = db.collection('contacts');
    
    // Hole alle Kontakte, sortiert nach neuestem zuerst
    const contacts = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    // Konvertiere MongoDB _id zu String für JSON
    const formattedContacts = contacts.map(contact => ({
      id: contact._id.toString(),
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      message: contact.message,
      createdAt: contact.createdAt instanceof Date 
        ? contact.createdAt.toISOString() 
        : new Date(contact.createdAt).toISOString(),
    }));
    
    return NextResponse.json({
      success: true,
      count: formattedContacts.length,
      contacts: formattedContacts,
    });
  } catch (error: any) {
    console.error('Fehler beim Abrufen der Kontakte:', error);
    return NextResponse.json({
      success: false,
      message: 'Fehler beim Abrufen der Kontakte',
      error: error.message,
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID ist erforderlich' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('morokutti-design');
    const collection = db.collection('contacts');

    // Prüfe ob die ID gültig ist
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Ungültige ID' },
        { status: 400 }
      );
    }

    // Lösche den Kontakt
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Kontakt nicht gefunden' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Kontakt erfolgreich gelöscht',
    });
  } catch (error: any) {
    console.error('Fehler beim Löschen des Kontakts:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Fehler beim Löschen des Kontakts',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
