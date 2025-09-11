// Never use @iconify/react inside this file.
import { ImageResponse } from 'next/og';

// Image metadata
export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
              borderRadius: '12px',
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