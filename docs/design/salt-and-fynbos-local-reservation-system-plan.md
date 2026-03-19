# Local Reservation System With Phased Checklist

## Summary

- Extend the existing contact experience on `/contact` into a dual-mode flow: `Reservation` and `General enquiry`.
- Keep the page server-rendered and keep all browser-only logic inside the current client form shell.
- Reservation mode becomes the challenge-completing feature: it saves reservations in `localStorage`, shows saved reservations for this browser, and still offers an email draft CTA so the restaurant's current email-first workflow remains intact.
- General enquiry mode preserves the current "draft an email and send it" behavior rather than forcing every contact into a reservation.

## Interfaces

- No new backend routes or server actions.
- Add a typed reservation service-window contract in `src/content/contact.ts` or a nearby typed content module:
  - `ReservationServiceWindow = "late-lunch" | "sunset-supper" | "slow-coastal-lunch"`
  - each window includes `label`, `timeLabel`, and allowed weekdays
- Add an internal reservation record contract:
  - `ReservationRecord = { id, name, email, date, serviceWindow, guests, notes, createdAt }`
- Add a versioned storage contract:
  - `salt-and-fynbos-reservations:v1` for saved reservations
  - optional secondary key only if needed for lightweight UI state, otherwise avoid extra persisted state
- Keep storage payload minimal and wrap all `localStorage` reads and writes in `try/catch`.

## Key Changes

- Replace the single-purpose enquiry form with a mode switcher at the top of the shell. Default to `Reservation`.
- Reservation mode fields:
  - guest name
  - email
  - date input
  - service-window select
  - numeric guest count
  - notes
- Reservation validation:
  - require all fields except notes
  - reject dates on closed days
  - reject date and service-window combinations that do not match the restaurant's published opening rhythm
  - if `localStorage` is unavailable, show a non-persistent error and direct the user to email or call instead
- Reservation submit behavior:
  - validate
  - save one `ReservationRecord`
  - clear the reservation fields
  - show a success panel with reservation summary and a `mailto:` CTA for sending the saved reservation details
- Reservation management UI:
  - render a "Saved reservations on this device" section in the same shell
  - sort records by date ascending, with upcoming reservations first
  - allow removing a saved reservation from local storage
  - listen for `storage` events so multiple tabs stay in sync
- General enquiry mode:
  - keep the existing draft-email flow
  - simplify fields to match message intent rather than reservation intent
  - preserve inline validation and success state
- Keep hydration safe:
  - do not read `localStorage` during server render
  - load saved reservations after mount, then render the hydrated list
- Documentation:
  - add this plan doc as the implementation checklist
  - update `CHALLENGES.md` only in the final verification phase after the feature is complete

## Phased Development Checklist

### Phase 1: Reservation Contract and Storage

- [x] Define `ReservationServiceWindow` options and weekday rules
- [x] Define `ReservationRecord` and versioned storage key
- [x] Add safe storage helpers for load, save, remove, and sort
- [x] Define the `mailto:` builder for saved reservation details

### Phase 2: Dual-Mode Contact Shell

- [x] Convert the current form shell into a shared `Reservation` / `General enquiry` mode switcher
- [x] Preserve the existing visual language and surrounding contact-page layout
- [x] Split validation and submit handling by mode without duplicating the entire shell UI

### Phase 3: Reservation Flow

- [x] Add structured reservation inputs and inline validation
- [x] Save successful reservations to `localStorage`
- [x] Show post-save confirmation with reservation summary and email CTA
- [x] Render the saved-reservations list with remove action
- [x] Sync the list across tabs via the `storage` event

### Phase 4: General Enquiry Preservation

- [x] Keep enquiry mode as a message-first flow with drafted email output
- [x] Ensure switching modes does not corrupt the other mode's validation or success state
- [x] Update contact-page copy so the dual-purpose behavior is explicit

### Phase 5: Verification and Challenge Update

- [x] Verify reservation save, refresh persistence, and remove behavior
- [x] Verify closed-day and invalid service-window validation
- [x] Verify enquiry mode still drafts the correct email
- [x] Verify no hydration errors or client/server mismatch around stored reservations
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [x] Update `CHALLENGES.md` to mark the localStorage reservation challenge complete
- [x] Mark the phase checklist items complete in this plan as work lands

## Test Plan

- Confirm reservation mode saves a valid booking and shows it again after refresh.
- Confirm reservation mode rejects Monday to Wednesday dates and mismatched service windows.
- Confirm multiple saved reservations render in ascending date order.
- Confirm removing a reservation updates the UI immediately and persists after refresh.
- Confirm a reservation saved in one tab appears in another tab after the storage event fires.
- Confirm that if storage access fails, the UI shows a clear fallback path and does not claim the reservation was saved.
- Confirm general enquiry mode still validates, generates the correct `mailto:` draft, and remains independent from reservation mode.
- Confirm lint and production build both pass.

## Assumptions

- "Reservation system using localStorage" is satisfied by per-browser reservation persistence and management; it does not imply real shared inventory, server sync, or actual table locking.
- v1 supports create, view, and remove for saved reservations; in-place editing is out of scope.
- Reservation mode should still support an email handoff because the restaurant's real-world workflow is currently email-first.
- This document is the source-of-truth checklist for the feature until implementation is complete.
