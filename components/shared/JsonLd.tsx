export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data)
    ? data.map((entry) => JSON.stringify(entry)).join(',')
    : JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Array.isArray(data) ? `[${payload}]` : payload,
      }}
    />
  );
}
