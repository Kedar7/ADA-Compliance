import React, { ReactElement } from 'react';

const sectionContent: Record<string, ReactElement> = {
  overview: (
    <section id="overview" className="section">
      <div className="intro-section">
        <h2>ADA Compliance for Angular Applications</h2>
        <p>Complete guide to building accessible Angular applications following WCAG 2.1 AA standards</p>
      </div>
      
      <h3>What is ADA Compliance?</h3>
      <p>The Americans with Disabilities Act (ADA) ensures that people with disabilities have equal access to digital content. WCAG 2.1 AA is the technical standard we follow.</p>
      
      <div className="highlight">
        <strong>Key Principles:</strong>
        <ul>
          <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
          <li><strong>Operable:</strong> Interface components must be operable by all users</li>
          <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
          <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
        </ul>
      </div>

      <h3>Angular CDK Accessibility Features</h3>
      <div className="code-block">
        <pre>
{`// Install Angular CDK
npm install @angular/cdk

// Import in your module
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [A11yModule],
  // ...
})
export class AppModule { }`}
        </pre>
      </div>
    </section>
  ),
  'semantic-html': (
    <section id="semantic-html" className="section">
      <h2>Semantic HTML <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Use Proper HTML Elements</h3>
        <p>Always use semantic HTML elements instead of generic divs and spans.</p>
        
        <div className="code-block">
          <pre>
{`<!-- ❌ Bad -->
<div class="button" (click)="submit()">Submit</div>
<div class="heading">Page Title</div>

<!-- ✅ Good -->
<button type="submit" (click)="submit()">Submit</button>
<h1>Page Title</h1>

<!-- Angular Component Example -->
@Component({
  template: \`
    <header>
      <h1>{{pageTitle}}</h1>
      <nav>
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section>
        <h2>Content Section</h2>
        <article>
          <h3>Article Title</h3>
          <p>Article content...</p>
        </article>
      </section>
    </main>
    
    <footer>
      <p>© 2024 Company Name</p>
    </footer>
  \`
})`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Heading Structure</h3>
        <p>Maintain proper heading hierarchy (h1 → h2 → h3, etc.)</p>
        
        <div className="code-block">
          <pre>
{`// Angular Service for heading management
@Injectable()
export class HeadingService {
  private currentLevel = 1;
  
  setPageTitle(title: string) {
    this.currentLevel = 1;
    document.title = title;
  }
  
  getNextHeadingLevel(): number {
    return this.currentLevel + 1;
  }
}

// Component usage
@Component({
  template: \`
    <h1>{{mainTitle}}</h1>
    <h2>{{sectionTitle}}</h2>
    <h3>{{subsectionTitle}}</h3>
  \`
})
export class PageComponent {
  mainTitle = 'Main Page Title';
  sectionTitle = 'Section Title';
  subsectionTitle = 'Subsection Title';
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'keyboard-navigation': (
    <section id="keyboard-navigation" className="section">
      <h2>Keyboard Navigation <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Tab Order and Focus Management</h3>
        <p>Ensure all interactive elements are keyboard accessible and have logical tab order.</p>
        
        <div className="code-block">
          <pre>
{`// Angular Component with keyboard navigation
@Component({
  template: \`
    <button 
      (click)="handleClick()"
      (keydown.enter)="handleClick()"
      (keydown.space)="handleClick()"
      [attr.tabindex]="isDisabled ? -1 : 0"
      [attr.aria-disabled]="isDisabled">
      {{buttonText}}
    </button>
    
    <div 
      role="button"
      tabindex="0"
      (click)="customAction()"
      (keydown.enter)="customAction()"
      (keydown.space)="customAction()"
      class="custom-button">
      Custom Button
    </div>
  \`
})
export class AccessibleButtonComponent {
  isDisabled = false;
  buttonText = 'Click Me';
  
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick();
    }
  }
  
  handleClick() {
    if (!this.isDisabled) {
      // Handle click action
    }
  }
  
  customAction() {
    // Custom action implementation
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Skip Links</h3>
        <p>Provide skip links for keyboard users to bypass repetitive content.</p>
        
        <div className="code-block">
          <pre>
{`// Skip link component
@Component({
  selector: 'app-skip-links',
  template: \`
    <div class="skip-links">
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    </div>
  \`,
  styles: [\`
    .skip-links {
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    }
    
    .skip-link {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    
    .skip-link:focus {
      position: static;
      width: auto;
      height: auto;
      padding: 8px;
      background: #000;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }
  \`]
})
export class SkipLinksComponent { }

// Usage in app component
@Component({
  template: \`
    <app-skip-links></app-skip-links>
    <nav id="navigation">...</nav>
    <main id="main-content">...</main>
  \`
})
export class AppComponent { }`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'aria-labels': (
    <section id="aria-labels" className="section">
      <h2>ARIA Labels and Roles <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>ARIA Labels</h3>
        <p>Use ARIA labels to provide accessible names for elements.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  template: \`
    <!-- Search input with ARIA label -->
    <input 
      type="search"
      [attr.aria-label]="searchAriaLabel"
      [(ngModel)]="searchTerm"
      placeholder="Search products...">
    
    <!-- Button with ARIA description -->
    <button 
      (click)="deleteItem()"
      [attr.aria-label]="'Delete ' + itemName"
      [attr.aria-describedby]="'delete-help'">
      🗑️
    </button>
    <div id="delete-help" class="sr-only">
      This action cannot be undone
    </div>
    
    <!-- Navigation with ARIA labels -->
    <nav [attr.aria-label]="'Main navigation'">
      <ul>
        <li><a routerLink="/home" [attr.aria-current]="isCurrentPage('/home') ? 'page' : null">Home</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </nav>
  \`,
  styles: [\`
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  \`]
})
export class AriaExampleComponent {
  searchAriaLabel = 'Search products';
  searchTerm = '';
  itemName = 'Product Item';
  
  isCurrentPage(path: string): boolean {
    return this.router.url === path;
  }
  
  deleteItem() {
    // Delete implementation
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'color-contrast': (
    <section id="color-contrast" className="section">
      <h2>Color and Contrast <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Color Contrast Requirements</h3>
        <p>Ensure minimum contrast ratios: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold).</p>
        
        <div className="success">
          <strong>Contrast Ratio Tools:</strong>
          <ul>
            <li>WebAIM Contrast Checker</li>
            <li>Chrome DevTools Accessibility Panel</li>
            <li>WAVE Browser Extension</li>
          </ul>
        </div>
        
        <div className="code-block">
          <pre>
{`// SCSS variables for accessible colors
$primary-color: #1976d2;      // 4.5:1 contrast on white
$secondary-color: #424242;    // 11.9:1 contrast on white
$success-color: #2e7d0f;      // 4.5:1 contrast on white
$error-color: #d32f2f;        // 5.4:1 contrast on white
$warning-color: #f57c00;      // 4.5:1 contrast on white

// Angular component with accessible styling
@Component({
  selector: 'app-accessible-card',
  template: \`
    <div class="card" [ngClass]="cardType">
      <h3>{{title}}</h3>
      <p>{{content}}</p>
      <button class="btn btn-primary">Action</button>
    </div>
  \`,
  styles: [\`
    .card {
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      background: #ffffff;
      color: #333333; /* 12.6:1 contrast ratio */
    }
    
    .card.success {
      border-color: #2e7d0f;
      background: #f1f8e9;
      color: #1b5e20; /* 7.4:1 contrast ratio */
    }
    
    .card.error {
      border-color: #d32f2f;
      background: #ffebee;
      color: #b71c1c; /* 5.4:1 contrast ratio */
    }
    
    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
    }
    
    .btn-primary {
      background: #1976d2;
      color: #ffffff; /* 4.5:1 contrast ratio */
    }
    
    .btn-primary:hover {
      background: #1565c0; /* Darker for better contrast */
    }
    
    .btn-primary:focus {
      outline: 2px solid #1976d2;
      outline-offset: 2px;
    }
  \`]
})
export class AccessibleCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() cardType: 'default' | 'success' | 'error' = 'default';
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  forms: (
    <section id="forms" className="section">
      <h2>Accessible Forms <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Form Labels and Instructions</h3>
        <p>Every form control must have a properly associated label.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  selector: 'app-accessible-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <!-- Text input with label -->
      <div class="form-group">
        <label for="firstName">
          First Name 
          <span class="required" aria-label="required">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          formControlName="firstName"
          [attr.aria-invalid]="isFieldInvalid('firstName')"
          [attr.aria-describedby]="getFieldDescribedBy('firstName')"
          required>
        <div *ngIf="isFieldInvalid('firstName')" 
             id="firstName-error" 
             class="error-message"
             role="alert">
          First name is required
        </div>
      </div>
      
      <!-- Email with instructions -->
      <div class="form-group">
        <label for="email">Email Address</label>
        <div id="email-help" class="help-text">
          We'll use this to send you updates
        </div>
        <input
          id="email"
          type="email"
          formControlName="email"
          aria-describedby="email-help email-error"
          [attr.aria-invalid]="isFieldInvalid('email')">
        <div *ngIf="isFieldInvalid('email')" 
             id="email-error" 
             class="error-message"
             role="alert">
          Please enter a valid email address
        </div>
      </div>
      
      <!-- Radio buttons with fieldset -->
      <fieldset>
        <legend>Preferred Contact Method</legend>
        <div class="radio-group">
          <input id="contact-email" type="radio" name="contactMethod" value="email" formControlName="contactMethod">
          <label for="contact-email">Email</label>
        </div>
        <div class="radio-group">
          <input id="contact-phone" type="radio" name="contactMethod" value="phone" formControlName="contactMethod">
          <label for="contact-phone">Phone</label>
        </div>
      </fieldset>
      
      <!-- Checkbox with proper labeling -->
      <div class="form-group">
        <input id="newsletter" type="checkbox" formControlName="newsletter">
        <label for="newsletter">
          Subscribe to our newsletter
          <span class="optional">(optional)</span>
        </label>
      </div>
      
      <button type="submit" [disabled]="userForm.invalid">
        Submit Form
      </button>
    </form>
  \`
})
export class AccessibleFormComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactMethod: ['email'],
      newsletter: [false]
    });
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  
  getFieldDescribedBy(fieldName: string): string {
    const describedBy = [];
    if (this.isFieldInvalid(fieldName)) {
      describedBy.push(\`\${fieldName}-error\`);
    }
    return describedBy.join(' ') || null;
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  images: (
    <section id="images" className="section">
      <h2>Images & Media <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Alt Text for Images</h3>
        <p>Provide descriptive alt text for all images that convey information.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  template: \`
    <!-- Decorative image -->
    <img src="decorative-border.png" alt="" role="presentation">
    
    <!-- Informative image -->
    <img 
      src="chart.png" 
      alt="Bar chart showing sales growth of 25% from Q1 to Q2 2024"
      class="chart-image">
    
    <!-- Complex image with long description -->
    <figure>
      <img 
        src="complex-diagram.png" 
        alt="Organizational structure diagram"
        aria-describedby="diagram-description">
      <figcaption id="diagram-description">
        The diagram shows a hierarchical structure with CEO at the top, 
        followed by three departments: Engineering, Marketing, and Sales. 
        Each department has 3-5 team members reporting to department heads.
      </figcaption>
    </figure>
    
    <!-- Image with aria-label for dynamic content -->
    <img 
      [src]="userAvatar" 
      [attr.aria-label]="'Profile picture of ' + userName"
      class="avatar">
  \`
})
export class ImageAccessibilityComponent {
  userAvatar = '/assets/avatar.png';
  userName = 'John Doe';
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'focus-management': (
    <section id="focus-management" className="section">
      <h2>Focus Management <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Modal Focus Management</h3>
        <p>Properly manage focus when opening and closing modals.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  selector: 'app-accessible-modal',
  template: \`
    <div 
      *ngIf="isOpen"
      class="modal-overlay"
      (click)="closeModal()"
      role="dialog"
      aria-modal="true"
      [attr.aria-labelledby]="modalTitleId">
      
      <div 
        class="modal-content"
        (click)="$event.stopPropagation()"
        #modalContent>
        
        <h2 [id]="modalTitleId">{{title}}</h2>
        <button 
          class="close-button"
          (click)="closeModal()"
          aria-label="Close modal">
          ×
        </button>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  \`
})
export class AccessibleModalComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();
  
  @ViewChild('modalContent') modalContent!: ElementRef;
  
  private previousActiveElement: HTMLElement | null = null;
  modalTitleId = \`modal-title-\${Math.random().toString(36).substr(2, 9)}\`;
  
  ngOnInit() {
    if (this.isOpen) {
      this.trapFocus();
    }
  }
  
  ngOnChanges() {
    if (this.isOpen) {
      this.trapFocus();
    } else {
      this.restoreFocus();
    }
  }
  
  private trapFocus() {
    this.previousActiveElement = document.activeElement as HTMLElement;
    
    // Focus the modal
    setTimeout(() => {
      this.modalContent.nativeElement.focus();
    }, 100);
    
    // Add focus trap
    document.addEventListener('keydown', this.handleKeyDown);
  }
  
  private restoreFocus() {
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
    
    if (event.key === 'Tab') {
      this.handleTabKey(event);
    }
  };
  
  private handleTabKey(event: KeyboardEvent) {
    const focusableElements = this.modalContent.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
  
  closeModal() {
    this.close.emit();
  }
  
  ngOnDestroy() {
    this.restoreFocus();
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'error-handling': (
    <section id="error-handling" className="section">
      <h2>Error Handling <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Accessible Error Messages</h3>
        <p>Provide clear, accessible error messages using ARIA live regions.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  template: \`
    <div 
      aria-live="polite" 
      aria-atomic="true"
      class="sr-only"
      [attr.aria-label]="errorMessage">
      {{errorMessage}}
    </div>
    
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          type="email"
          formControlName="email"
          [attr.aria-invalid]="isFieldInvalid('email')"
          [attr.aria-describedby]="getFieldErrorId('email')">
        
        <div 
          *ngIf="isFieldInvalid('email')"
          [id]="getFieldErrorId('email')"
          class="error-message"
          role="alert">
          {{getFieldError('email')}}
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  \`
})
export class ErrorHandlingComponent {
  form: FormGroup;
  errorMessage = '';
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  
  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return \`\${fieldName} is required\`;
      if (field.errors['email']) return 'Please enter a valid email address';
    }
    return '';
  }
  
  getFieldErrorId(fieldName: string): string {
    return \`\${fieldName}-error\`;
  }
  
  onSubmit() {
    if (this.form.valid) {
      // Handle submission
    } else {
      this.errorMessage = 'Please fix the errors above before submitting.';
    }
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'responsive-design': (
    <section id="responsive-design" className="section">
      <h2>Responsive Design <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Mobile Accessibility</h3>
        <p>Ensure your application is accessible on mobile devices.</p>
        
        <div className="code-block">
          <pre>
{`// Responsive design with accessibility considerations
@Component({
  template: \`
    <div class="responsive-container">
      <!-- Mobile-first navigation -->
      <nav class="mobile-nav" [class.open]="isMenuOpen">
        <button 
          class="menu-toggle"
          (click)="toggleMenu()"
          [attr.aria-expanded]="isMenuOpen"
          aria-label="Toggle navigation menu">
          <span class="hamburger"></span>
        </button>
        
        <ul class="nav-list">
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
      </nav>
      
      <!-- Responsive content -->
      <main class="main-content">
        <h1>Responsive Accessible Design</h1>
        <p>This content adapts to different screen sizes while maintaining accessibility.</p>
      </main>
    </div>
  \`,
  styles: [\`
    .responsive-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .mobile-nav {
      position: relative;
    }
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-list li {
      margin-right: 20px;
    }
    
    .nav-list a {
      text-decoration: none;
      color: #333;
      padding: 10px;
      display: block;
    }
    
    .nav-list a:hover,
    .nav-list a:focus {
      background: #f0f0f0;
      outline: 2px solid #007bff;
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      
      .nav-list {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        flex-direction: column;
      }
      
      .nav-list.open {
        display: flex;
      }
      
      .nav-list li {
        margin-right: 0;
        border-bottom: 1px solid #eee;
      }
      
      .nav-list li:last-child {
        border-bottom: none;
      }
    }
    
    /* Ensure touch targets are at least 44px */
    .menu-toggle,
    .nav-list a {
      min-height: 44px;
      min-width: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  \`]
})
export class ResponsiveDesignComponent {
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  testing: (
    <section id="testing" className="section">
      <h2>Testing <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Automated Testing Tools</h3>
        <p>Use automated tools to catch common accessibility issues.</p>
        
        <div className="success">
          <strong>Recommended Testing Tools:</strong>
          <ul>
            <li>axe-core (axe-core-angular)</li>
            <li>WAVE Web Accessibility Evaluator</li>
            <li>Lighthouse Accessibility Audit</li>
            <li>pa11y</li>
            <li>Accessibility Insights</li>
          </ul>
        </div>
        
        <div className="code-block">
          <pre>
{`// Angular testing with axe-core
import { axe, toHaveNoViolations } from 'jest-axe';

describe('Accessibility Tests', () => {
  it('should not have accessibility violations', async () => {
    const { debugElement } = fixture;
    const results = await axe(debugElement.nativeElement);
    expect(results).toHaveNoViolations();
  });
  
  it('should have proper heading structure', () => {
    const headings = fixture.debugElement.queryAll(By.css('h1, h2, h3, h4, h5, h6'));
    expect(headings.length).toBeGreaterThan(0);
    
    // Check for proper hierarchy
    const headingLevels = headings.map(h => 
      parseInt(h.nativeElement.tagName.charAt(1))
    );
    
    // Ensure no skipped levels
    for (let i = 1; i < headingLevels.length; i++) {
      expect(headingLevels[i] - headingLevels[i-1]).toBeLessThanOrEqual(1);
    }
  });
  
  it('should have proper form labels', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input, select, textarea'));
    
    inputs.forEach(input => {
      const id = input.nativeElement.getAttribute('id');
      if (id) {
        const label = fixture.debugElement.query(By.css(\`label[for="\${id}"]\`));
        expect(label).toBeTruthy();
      }
    });
  });
});

// Manual testing checklist
const accessibilityChecklist = [
  'Can navigate using only keyboard?',
  'Are all interactive elements focusable?',
  'Is there sufficient color contrast?',
  'Are images properly labeled?',
  'Do forms have proper labels and error messages?',
  'Is the heading structure logical?',
  'Are ARIA attributes used correctly?',
  'Does the site work with screen readers?'
];`}
          </pre>
        </div>
      </div>
    </section>
  ),
  checklist: (
    <section id="checklist" className="section">
      <h2>Final Checklist <span className="badge">WCAG 2.1 AA</span></h2>
      
      <div className="guideline">
        <h3>Pre-Launch Accessibility Review</h3>
        <p>Complete this checklist before launching your application.</p>
        
        <div className="highlight">
          <h4>Semantic HTML</h4>
          <ul>
            <li>✓ Use proper HTML elements (button, nav, main, etc.)</li>
            <li>✓ Maintain logical heading hierarchy</li>
            <li>✓ Use semantic landmarks (header, nav, main, footer)</li>
            <li>✓ Provide skip links for keyboard users</li>
          </ul>
        </div>
        
        <div className="highlight">
          <h4>Keyboard Navigation</h4>
          <ul>
            <li>✓ All interactive elements are keyboard accessible</li>
            <li>✓ Logical tab order throughout the application</li>
            <li>✓ Visible focus indicators</li>
            <li>✓ No keyboard traps</li>
          </ul>
        </div>
        
        <div className="highlight">
          <h4>ARIA and Labels</h4>
          <ul>
            <li>✓ All form controls have proper labels</li>
            <li>✓ Images have appropriate alt text</li>
            <li>✓ ARIA attributes used correctly</li>
            <li>✓ Dynamic content updates announced</li>
          </ul>
        </div>
        
        <div className="highlight">
          <h4>Color and Contrast</h4>
          <ul>
            <li>✓ Minimum 4.5:1 contrast ratio for normal text</li>
            <li>✓ Minimum 3:1 contrast ratio for large text</li>
            <li>✓ Information not conveyed by color alone</li>
            <li>✓ Focus indicators visible in high contrast mode</li>
          </ul>
        </div>
        
        <div className="highlight">
          <h4>Forms and Error Handling</h4>
          <ul>
            <li>✓ All form fields have labels</li>
            <li>✓ Error messages are clear and accessible</li>
            <li>✓ Required fields are indicated</li>
            <li>✓ Form validation provides helpful feedback</li>
          </ul>
        </div>
        
        <div className="highlight">
          <h4>Testing</h4>
          <ul>
            <li>✓ Automated accessibility testing completed</li>
            <li>✓ Manual keyboard navigation testing</li>
            <li>✓ Screen reader testing performed</li>
            <li>✓ Mobile accessibility verified</li>
          </ul>
        </div>
        
        <div className="success">
          <h4>Additional Resources</h4>
          <ul>
            <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener">WCAG 2.1 Quick Reference</a></li>
            <li><a href="https://webaim.org/" target="_blank" rel="noopener">WebAIM Resources</a></li>
            <li><a href="https://www.deque.com/axe/" target="_blank" rel="noopener">axe-core Documentation</a></li>
            <li><a href="https://www.nvaccess.org/about-nvda/" target="_blank" rel="noopener">NVDA Screen Reader</a></li>
          </ul>
        </div>
      </div>
    </section>
  ),
};

type ContentProps = {
  activeSection: string;
};

export default function Content({ activeSection }: ContentProps) {
  return (
    <div className="main-content">
      {sectionContent[activeSection] || <p>Section not found.</p>}
    </div>
  );
} 