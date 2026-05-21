import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';

export type OgImageConfig = {
  /** First half of the headline rendered in plain white. */
  headlinePrefix: string;
  /** Optional accent rendered in italic brand red, appears after the prefix. */
  headlineAccent?: string;
  /** Optional second half rendered in plain white after the accent. */
  headlineSuffix?: string;
  /** Optional eyebrow rendered above the headline. */
  eyebrow?: string;
};

export function renderOgImage(config: OgImageConfig) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0F1B45',
          padding: '80px',
          color: 'white',
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '6px',
            height: '40px',
            marginBottom: '40px',
          }}
        >
          <div style={{ flex: 1, backgroundColor: '#243D97' }} />
          <div style={{ flex: 1, backgroundColor: '#EC1C24' }} />
        </div>

        {config.eyebrow && (
          <div
            style={{
              fontSize: '20px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '32px',
            }}
          >
            {config.eyebrow}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: '72px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            maxWidth: '900px',
          }}
        >
          <span>{config.headlinePrefix}</span>
          {config.headlineAccent && (
            <>
              <span>&nbsp;</span>
              <span
                style={{
                  color: '#EC1C24',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                {config.headlineAccent}
              </span>
            </>
          )}
          {config.headlineSuffix && (
            <>
              <span>&nbsp;</span>
              <span>{config.headlineSuffix}</span>
            </>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.04em',
            marginTop: 'auto',
          }}
        >
          ProPlus Plumbing · proplusplumbing.com
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
