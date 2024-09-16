'use server'

import Papa from 'papaparse';

export async function readCSV(formData: FormData) {
  console.log('Reading CSV file...');
  const file = formData.get('uploadCSV') as File;
  // Read the file and parse it as a json
  const data = await file.text();
  const parsedData = Papa.parse(data);
  console.log(parsedData);
}