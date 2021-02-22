import Head from 'next/head'

export default ({
  title = 'BeaverHacks - Hosted by the Oregon State University Hackathon Club',
  description = 'Online, quarterly hackathons for OSU students and alumni',
  image = 'https://angelhacks.org/public/banner-inverted.png',
  url = 'https://beaverhacks.com'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="BeaverHacks" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'BeaverHacks',
          url: 'https://beaverhacks.com',
          logo: './static/profiles/osu_hackathon_club_logo_icon_right.png',
          sameAs: [

          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'hackathonclub@oregonstate.edu',
              contactType: 'customer support',
              url: 'https://beaverhacks.com'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'BeaverHacks',
          startDate: '2021-04-08T00:00',
          endDate: '2021-04-11T17:00',
          description:
            'BeaverHacks - Online, quarterly hackathons hosted by the OSU Hackathon Club',
          isAccessibleForFree: true,
          url: 'https://beaverhacks.com',
          image: './profiles/osu_hackathon_club_logo_icon_right.png',
          location: {
            '@type': 'Place',
            name: 'OSU',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Corvallis',
              addressRegion: 'OR',
              postalCode: '97331',
              streetAddress: '1500 SW Jefferson Way'
            }
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://beaverhacks.com',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2021-04-08',
            validThrough: '2021-04-11'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'BeaverHacks Organizers'
          }
        })
      }}
    />
  </Head>
)
