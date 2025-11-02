import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        x402 JavaScript/TypeScript SDK
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        You can open{' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          View Documentation
        </Link>{' '}
        or{' '}
        <Link
          href="/docs/getting-started"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          Get Started
        </Link>
        .
      </p>
    </main>
  );
}
