# Lawson State Homepage: Accessibility & User-Focused Rebuild

## Executive Summary

The current homepage prioritizes visual design and motion over accessibility and user priorities. This rebuild focuses on:
1. **WCAG 2.1 AA compliance** across all sections
2. **Visitor-centric information architecture** (New vs. Returning students)
3. **Keyboard navigation and screen reader support**
4. **Respects user motion preferences** (`prefers-reduced-motion`)

---

## Phase 1: Critical Accessibility Fixes

### 1.1 Skip Link (Top Priority)
**What it is:** A hidden link that appears on focus, allowing keyboard users to jump to main content.

```tsx
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded"
>
  Skip to main content
</a>
```

**Why:** Keyboard and screen reader users shouldn't navigate through entire nav before reaching content.

### 1.2 Semantic HTML Fixes

| Issue | Fix |
|-------|-----|
| `<div>` buttons with onClick | Use `<button>` with proper ARIA labels |
| Missing `<main>` wrapper | Add `<main id="main-content">` to content sections |
| Heading hierarchy issues | Use `<h1>` once (page title), proper `<h2>/<h3>` nesting |
| Tab interface | Add `role="tablist"`, `role="tab"`, `role="tabpanel"` with ARIA attributes |
| Link without text | Add visible or `aria-label` text to all links |

### 1.3 Motion & Animation Fixes

**Current problem:** Animated hero word cycling, parallax effects, fade-ins can cause motion sickness.

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations */
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Video autoplay must be paused by default */
  video {
    autoplay: false;
  }
}
```

**Approach:**
- Remove autoplay video (or make it play on user interaction only)
- Replace animated word cycling with static "Where your future begins here"
- Keep parallax for visual polish, but disable via `prefers-reduced-motion`

### 1.4 Color Contrast

**Target:** WCAG AA (4.5:1 for text, 3:1 for graphics)

| Element | Current | Target | Status |
|---------|---------|--------|--------|
| White text on dark blue hero | ~4.8:1 | ✅ Pass |
| Gold text on dark blue | ~2.1:1 | ❌ **FAIL - needs fix** |
| Muted gray text | Need to check | ✅ Aim for 4.5:1 |

**Fix gold text:** Either darken the blue or lighten the gold.

---

## Phase 2: Content Reorganization

### 2.1 New Visitor Path (Priority 1)

**Goal:** First-time visitors should answer "Can I apply and get into Lawson?" within 5 seconds.

```
HERO SECTION
├─ Headline: "Start your journey"
├─ Subheadline: "[Key differentiator - affordability, accessibility, programs]"
├─ CTAs: "Apply Now" | "Explore Programs"
├─ Stats: 200+ programs, 2 campuses, 51 dual enrollment, Est. 1949

FEATURED PROGRAMS (Newly positioned HIGH on page)
├─ Show 3-4 most popular programs with icons
├─ "Browse All Programs" link
└─ Goal: Show the diversity of programs quickly

WHY LAWSON STATE? (New section)
├─ Affordability (tuition costs)
├─ Flexibility (evening, weekend, online)
├─ Support (first-gen focus, tutoring, advising)
├─ Outcomes (job placement, transfer rates)

QUICK ENTRY POINTS
├─ Start Application
├─ Schedule Campus Tour
├─ Explore Financial Aid
└─ Attend Orientation

NEWS & CAMPUS CULTURE
├─ 2-3 featured stories
├─ Upcoming events
└─ Gallery / student stories
```

### 2.2 Returning/Current Student Path (Priority 2)

**Goal:** Current students should get to critical functions in 2 clicks.

**Sticky Navigation Bar (Always Visible)**
- Student Portal (bright, primary color)
- Register for Classes
- Pay Bill
- Financial Aid Status
- Advising

**Secondary Content**
- Calendar/Semester Dates
- Important Announcements
- Support Resources (Tutoring, Wellness, IT Help)
- Academic Advising Contact Info

---

## Phase 3: Component-by-Component Rebuild

### 3.1 Hero Section Redesign

**Remove:**
- Autoplay video
- Animated word cycling
- Desktop-only path selector

**Replace with:**
```tsx
<section className="hero" style={{ background: 'linear-gradient(135deg, navy, darkblue)' }}>
  <div className="hero-content max-w-7xl mx-auto px-6 py-20">
    {/* Breadcrumb navigation for context */}
    <nav aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
      </ol>
    </nav>
    
    {/* Main headline - STATIC, no animation */}
    <h1 className="text-5xl font-black leading-tight mb-4">
      Start Your Future at Lawson State
    </h1>
    
    {/* Subheadline with key value prop */}
    <p className="text-xl mb-8 max-w-2xl">
      Affordable education, 200+ programs, and flexible schedules designed for working adults,
      first-generation students, and career changers in Birmingham, AL.
    </p>
    
    {/* Key stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 py-8 border-y">
      {/* Each stat has proper semantic HTML */}
      <div>
        <strong className="text-3xl block">200+</strong>
        <span className="text-sm uppercase">Programs</span>
      </div>
      {/* ... more stats ... */}
    </div>
    
    {/* CTAs - clear, large, accessible */}
    <div className="flex gap-4 flex-wrap">
      <a href="/admissions/apply" className="btn btn-primary btn-lg">
        Start My Application
      </a>
      <a href="/academics" className="btn btn-secondary btn-lg">
        Browse All Programs
      </a>
    </div>
  </div>
  
  {/* Optional: Static video background with sound OFF */}
  {/* Only if it adds value; consider removing entirely for accessibility */}
</section>
```

### 3.2 Quick Links Restructuring

**Problem:** Current quick links bar scrolls horizontally, obscures content, prioritizes wrong actions.

**Solution:** Create visitor-context-aware links instead.

For **New Visitors:**
```tsx
<section className="quick-entry-new">
  <h2>Get Started in 3 Steps</h2>
  <ol>
    <li><a href="/admissions/apply">Step 1: Apply</a></li>
    <li><a href="/financial-aid">Step 2: Explore Financial Aid</a></li>
    <li><a href="/visit">Step 3: Schedule Campus Tour</a></li>
  </ol>
</section>
```

For **Returning Students:**
```tsx
<nav className="sticky bg-white shadow-sm" aria-label="Quick actions">
  <div className="max-w-7xl mx-auto px-6 py-2 flex gap-2">
    <a href="/student-portal" className="btn btn-primary">Student Portal</a>
    <a href="/registration" className="btn">Register</a>
    <a href="/pay-bill" className="btn">Pay Bill</a>
    <a href="/financial-aid" className="btn">Financial Aid</a>
  </div>
</nav>
```

### 3.3 Pathway Cards → Visitor Decision Tree

**Current problem:** Tab interface requires interaction; doesn't work well on mobile.

**Better approach:** Progressive disclosure with clear decision tree.

```
Question: What describes you?
┌─────────────────────────────────────────┐
│ ☐ I'm a high school graduate          │
│   or never attended college             │
│   → "New Student Path"                  │
│                                         │
│ ☐ I have college credits               │
│   from another school                   │
│   → "Transfer Student Path"             │
│                                         │
│ ☐ I'm already enrolled                 │
│   at Lawson State                       │
│   → "Current Student Path"              │
│                                         │
│ ☐ I'm looking for career              │
│   training or certificate               │
│   → "Workforce/Adult Learner Path"     │
└─────────────────────────────────────────┘
```

Each section opens to show:
- Specific action steps
- Relevant links
- Timeline/deadlines
- FAQ specific to that path

### 3.4 Programs Section

**Move HIGHER on page** (after hero, before other content)

```tsx
<section id="programs" className="py-20">
  <h2>Our Programs & Pathways</h2>
  
  {/* Filter/browse controls */}
  <fieldset>
    <legend>Filter by program type:</legend>
    <label>
      <input type="checkbox" name="type" value="transfer" />
      University Transfer
    </label>
    {/* ... more filters ... */}
  </fieldset>
  
  {/* Grid of programs with descriptions */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {programs.map(program => (
      <article key={program.id} className="program-card">
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <a href={program.url}>Learn more about {program.name}</a>
      </article>
    ))}
  </div>
</section>
```

### 3.5 News & Events Section

Make this a proper `<aside>` or dedicated section with clear heading hierarchy.

```tsx
<section id="news-events" className="py-20">
  <h2>Stay Updated</h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Featured story */}
    <article className="featured-story">
      <h3>Latest News</h3>
      <img src={story.image} alt={story.imageAlt} />
      <h4>{story.title}</h4>
      <p>{story.excerpt}</p>
      <a href={story.url}>Read full story</a>
    </article>
    
    {/* Upcoming events */}
    <aside className="upcoming-events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <time dateTime={event.date}>{formatDate(event.date)}</time>
            <a href={event.url}>{event.title}</a>
          </li>
        ))}
      </ul>
    </aside>
    
    {/* Calendar/full events link */}
    <div className="events-cta">
      <a href="/calendar" className="btn">View Full Calendar</a>
    </div>
  </div>
</section>
```

### 3.6 Support & Resources Section

**Keep but improve structure:**

```tsx
<section id="support" aria-labelledby="support-heading">
  <h2 id="support-heading">We're Here to Help</h2>
  
  <div className="resources-grid">
    <div className="resource-card">
      <h3>Academic Support</h3>
      <ul>
        <li><a href="/tutoring">Free Tutoring</a></li>
        <li><a href="/writing-center">Writing Center</a></li>
        <li><a href="/math-help">Math Help</a></li>
      </ul>
    </div>
    
    <div className="resource-card">
      <h3>Student Services</h3>
      <ul>
        <li><a href="/advising">Academic Advising</a></li>
        <li><a href="/counseling">Counseling</a></li>
        <li><a href="/disability-services">Disability Services</a></li>
      </ul>
    </div>
    
    {/* ... more resource cards ... */}
  </div>
</section>
```

---

## Phase 4: Accessibility Testing Checklist

- [ ] **Keyboard Navigation**
  - [ ] Can navigate entire page with Tab key
  - [ ] Focus visible on all interactive elements
  - [ ] No keyboard traps
  - [ ] Can access all dropdowns/modals via keyboard

- [ ] **Screen Reader Testing**
  - [ ] Test with NVDA (Windows), JAWS (if available), or Mac VoiceOver
  - [ ] Page structure makes sense when read linearly
  - [ ] Form labels associated with inputs
  - [ ] Link text is descriptive (not "click here")
  - [ ] Images have proper alt text or marked decorative

- [ ] **Color Contrast**
  - [ ] All text 4.5:1 or higher (WCAG AA)
  - [ ] Check gold/navy combination specifically
  - [ ] Use WebAIM contrast checker

- [ ] **Motion & Animation**
  - [ ] Animations respect `prefers-reduced-motion`
  - [ ] Auto-play videos disabled by default
  - [ ] No flashing content (frequency < 3Hz)

- [ ] **Responsive Design**
  - [ ] Mobile: All buttons/links 44x44px minimum
  - [ ] Text readable at 200% zoom
  - [ ] No horizontal scrolling required
  - [ ] Touch targets properly spaced

- [ ] **Forms & Inputs**
  - [ ] All form fields have labels
  - [ ] Error messages are clear and associated
  - [ ] Form can be submitted via keyboard
  - [ ] Inputs announce type (email, password, etc.)

---

## Phase 5: Implementation Roadmap

| Phase | Component | Timeline | Owner |
|-------|-----------|----------|-------|
| **1** | Skip link + semantic HTML | Week 1 | Developer |
| **2** | Hero redesign (no animation) | Week 1 | Developer |
| **3** | Visitor nav & quick links | Week 2 | Designer + Developer |
| **4** | Programs section reposition | Week 2 | Developer |
| **5** | Pathways → Decision tree | Week 3 | Designer + Developer |
| **6** | News/Events/Support cleanup | Week 3 | Developer |
| **7** | Accessibility testing | Week 4 | QA + Developer |
| **8** | Refinements & deploy | Week 4 | Team |

---

## File Changes

### New Components to Create
- `skip-to-main-link.tsx` — Accessible skip link
- `visitor-decision-tree.tsx` — Visitor path selector
- `featured-programs.tsx` — Repositioned programs section
- `sticky-student-nav.tsx` — Always-visible student actions

### Components to Refactor
- `hero.tsx` — Remove animation, simplify, add skip link integration
- `quick-links.tsx` → Split into visitor-context components
- `pathway-cards.tsx` → Replace with decision-tree component
- `programs.tsx` — Add filtering, improve semantics
- `news-events.tsx` — Improve structure, add proper heading levels
- `page.tsx` — Reorder component hierarchy

### Styling Updates
- Add `.sr-only` utility for hidden text
- Update `@media (prefers-reduced-motion)` globally
- Ensure button states (hover, focus, active) visible
- Improve gold/navy contrast

---

## Success Metrics

1. **Accessibility:** WCAG 2.1 AA on all pages (validated with axe DevTools)
2. **Performance:** LCP < 2.5s, CLS < 0.1 (maintain or improve)
3. **Engagement:** Track clicks on primary CTAs (Apply, Programs, Portal)
4. **Feedback:** Test with users using screen readers, keyboard-only navigation

---

## Notes

- Keep the visual design appeal (navy, gold, rich imagery) but make it work for everyone
- Test early with real users (especially those using assistive tech)
- The goal is not to make the page boring, but to make it **usable by all**
- Refer to [Lawson State brand guidelines] for color values and approved usage
