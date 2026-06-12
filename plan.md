# Implementation Plan: Food & Beverage Service App

Build a comprehensive food and beverage service application featuring a menu, beverage making methods, hotel information, ordering system, and customer feedback.

## Scope Summary
- **Menu Management**: Display of food and beverage items with categories, prices, and descriptions.
- **Beverage Recipes**: A dedicated section for "beverage making methods" (recipes/instructions).
- **Hotel Information**: Details about the establishment (location, hours, amenities).
- **Ordering System**: A client-side shopping cart and simulated order placement.
- **Customer Feedback**: A form for users to submit reviews or feedback (simulated persistence).
- **UI/UX**: Responsive, food-focused design using Tailwind CSS and Shadcn UI.

## Non-Goals
- Real-time order tracking (out of scope for frontend-only).
- Payment gateway integration (simulated checkout only).
- User authentication/profiles (staying within client-only scope).
- Persistent database storage (Supabase is not used in this session).

## Assumptions
- Data will be managed via static JSON or local constants.
- State management (cart, feedback) will use React state and `localStorage`.

## Affected Areas
- `src/App.tsx`: Main routing and layout.
- `src/components/`: New components for Menu, Recipes, Cart, Feedback, and Info.
- `src/lib/constants.ts`: Mock data for menu items and hotel info.
- `src/hooks/`: Custom hooks for cart management.

## Ordered Phases

### Phase 1: Data Modeling & Constants
- Define the structure for menu items, beverage methods, and hotel info.
- **Owner**: `frontend_engineer`
- **Deliverable**: `src/lib/constants.ts` with comprehensive mock data.

### Phase 2: Navigation & Layout
- Set up a clean navigation bar (Home, Menu, Recipes, About, Feedback).
- **Owner**: `frontend_engineer`
- **Deliverable**: Header/Nav components and basic routing structure in `App.tsx`.

### Phase 3: Menu & Recipe Modules
- Build the `Menu` component with category filtering.
- Build the `BeverageMethods` component showing step-by-step instructions.
- **Owner**: `frontend_engineer`
- **Deliverable**: Interactive menu and recipe display pages.

### Phase 4: Ordering System (Cart)
- Implement a "Add to Order" feature.
- Build a slide-over or dedicated page for the `Cart`.
- Add a "Checkout" summary (mock).
- **Owner**: `frontend_engineer`
- **Deliverable**: Functional cart state and checkout UI.

### Phase 5: Hotel Info & Feedback
- Build the `HotelInfo` landing/about section.
- Build the `FeedbackForm` with validation and a "success" state.
- **Owner**: `frontend_engineer`
- **Deliverable**: Information and Feedback pages.

### Phase 6: Final Polish & UX
- Apply consistent styling, transitions, and empty states.
- Ensure responsiveness on mobile.
- **Owner**: `quick_fix_engineer`
- **Deliverable**: Final visual adjustments.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core application features and data layer.
2. quick_fix_engineer — Final UI polishing and responsive tweaks.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Create the entire application structure. Start by defining mock data in `src/lib/constants.ts` (Menu items, Recipes with steps, Hotel details). Implement a responsive navigation. Use Shadcn UI components (Card, Button, Tabs, Badge, Input, Textarea) to build the Menu, Recipe viewer, Cart system (using `localStorage` for persistence), and Feedback form.
- **Files:** `src/App.tsx`, `src/lib/constants.ts`, `src/components/*`
- **Depends on:** none
- **Acceptance criteria:** App has functional navigation, menu displays categories correctly, beverage recipes are readable, items can be added to a cart, and the feedback form shows a success message.

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** Review the UI for any alignment issues, improve spacing, and ensure the mobile view is optimized for restaurant staff/customers.
- **Files:** `src/index.css`, `src/components/*`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** No layout breaks on mobile; consistent typography and color usage throughout.
