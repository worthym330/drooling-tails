# Drooling Tails E-commerce Backend

## Overview
Express + Firebase Firestore backend providing product, order, and payment integration endpoints.

## Endpoints
- GET /api/health
- GET /api/products
- POST /api/products { name, description, price, images[], stock }
- POST /api/orders { items[{productId,qty,price}], customer:{name,email,address}, paymentProvider }
- POST /api/payments/stripe/create-intent { amount, currency }
- POST /api/payments/razorpay/order { amount, currency }
- GET /api/admin/stats

## Setup
1. Copy `.env.example` to `.env` and populate values.
2. Provide Firebase service account JSON (escaped) in FIREBASE_SERVICE_ACCOUNT_JSON.
3. Install deps: `npm install`.
4. Run dev (frontend + backend): `npm run dev`.

## Notes
- Authentication not yet implemented; restrict access before production (e.g., admin route protection, API keys, Firebase Auth, or JWT).
- Payment webhooks not implemented; add to confirm payments & update order status.
- Validate and sanitize inputs before production.
