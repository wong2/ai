export function Weather({
  city,
  unit,
}: Readonly<{
  city: string;
  unit: 'C' | 'F';
}>) {
  return (
    <div>
      <h2>{city}</h2>
      <p>Tempxxerature: 25{unit}</p>
    </div>
  );
}
