import React, { lazy, Suspense } from 'react'
// import ErrorBoundary from './ErrorBoundary'
import Spinner from './Spinner'

const PAGES = {
  Home: lazy(() => import('../../pages/Home')),
  Albums: lazy(() => import('../../pages/Albums')),
  Album: lazy(() => import('../../pages/Album')),
}

export default function Page({ page = 'Home' }) {
  const PageComponent = PAGES[page]
  if (!PageComponent) return <div>Page `{page}` not found</div>

  return (
    <Suspense fallback={<Spinner />}>
      {/* <ErrorBoundary> */}
        <PageComponent />
      {/* </ErrorBoundary> */}
    </Suspense>
  )
}
