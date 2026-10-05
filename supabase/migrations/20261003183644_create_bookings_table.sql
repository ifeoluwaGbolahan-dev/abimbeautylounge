/*
# Create bookings table for appointment requests

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — client's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional email
  - `service` (text, not null) — requested service name
  - `preferred_date` (text, not null) — preferred appointment date
  - `preferred_time` (text, not null) — preferred appointment time
  - `message` (text, nullable) — additional notes
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT (public booking form, no sign-in required).
- Allow anon + authenticated SELECT (so the form can confirm submission).
- No UPDATE or DELETE from the public frontend.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date text NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);
