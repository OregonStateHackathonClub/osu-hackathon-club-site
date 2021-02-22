import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://beaverhacks.com">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="/static/bh-logo.png"
        alt="BeaverHacks avatar"
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'primary',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
