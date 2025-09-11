// Never use @iconify/react inside this file.
import { ImageResponse } from 'next/og';

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}