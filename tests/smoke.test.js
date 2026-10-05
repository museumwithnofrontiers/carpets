import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'carpets',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Discover Carpet Art',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '0b92d7bf-5e20-5bb2-8dc2-0844969d6fc4',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'bef82deb-d132-5484-9771-21ba888224d0',
    dynasty: {
      item: 'bef82deb-d132-5484-9771-21ba888224d0',
      name: 'Ottomans',
    },
    timeline: {
      code: 'gr',
      id: 'grc',
      country: 'Greece',
      rows: 11,
      event: 'Filiki Etaireia',
      gallery: 9,
      galleryTiles: 9,
      galleryItem: 'Floor mat',
    },
    partner: {
      id: '2300bb0e-fc9f-55c5-ae2e-20f619a46cce',
      name: 'Weltmuseum Wien',
      city: 'Vienna',
      country: 'Austria',
      objects: 7,
    },
  },
})
