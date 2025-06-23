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

      <h3>How ESLint Helps with ADA Compliance in Angular</h3>
      <p>
        <strong>ESLint</strong> can be used in Angular projects to enforce accessibility (ADA/WCAG) best practices. By adding Angular-specific ESLint packages and accessibility plugins, you can automatically check your components and templates for common accessibility issues.
      </p>
      <ul>
        <li>Warns about missing ARIA attributes, alt text, and other accessibility issues in Angular templates</li>
        <li>Enforces best practices for accessible Angular markup</li>
        <li>Helps your project meet ADA and WCAG 2.1 AA standards</li>
      </ul>
      <h4>How to Set Up ESLint for Accessibility in Angular</h4>
      <div className="code-block">
        <pre>{`
# Install ESLint and Angular accessibility plugin
ng add @angular-eslint/schematics
npm install --save-dev eslint-plugin-jsx-a11y

# Example .eslintrc.json for Angular + Accessibility
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "plugin:@angular-eslint/recommended"
      ]
    },
    {
      "files": ["*.html"],
      "extends": [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility"
      ]
    }
  ]
}
`}</pre>
      </div>

      <h3>Custom ESLint Rules for ADA Compliance</h3>
      <p>
        You can further strengthen ADA compliance by adding custom accessibility rules to your ESLint configuration. Here is an example of a <code>rules</code> section you can add to your <code>.eslintrc.json</code>:
      </p>
      <div className="code-block">
        <pre>{`
"rules": {
  // Enforce alt text on images
  "@angular-eslint/template/accessibility-alt-text": "error",
  // Require ARIA roles where appropriate
  "@angular-eslint/template/accessibility-aria-roles": "error",
  // Enforce valid ARIA attributes
  "@angular-eslint/template/accessibility-valid-aria": "error",
  // Require label for all form elements
  "@angular-eslint/template/accessibility-label-for": "error",
  // Enforce tabIndex is not greater than 0
  "@angular-eslint/template/accessibility-tabindex-no-positive": "error",
  // Enforce elements with click handlers are focusable
  "@angular-eslint/template/accessibility-elements-content": "error",
  // Enforce proper heading order
  "@angular-eslint/template/accessibility-heading-has-content": "error",
  // Enforce accessible name for buttons
  "@angular-eslint/template/accessibility-button-name": "error"
}
`}</pre>
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
})
export class PageComponent {
  mainTitle = 'Main Page Title';
  sectionTitle = 'Section Title';
  subsectionTitle = 'Subsection Title';
}`}
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
  'language-declaration': (
    <section id="language-declaration" className="section">
      <h2>Language Declaration <span className="badge">WCAG 2.1 AA 3.1.1</span></h2>
      
      <div className="guideline">
        <h3>Page Language</h3>
        <p>Declare the primary language of the page using the lang attribute.</p>
        
        <div className="code-block">
          <pre>
{`<!-- HTML document with language declaration -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ADA Compliance Guide</title>
</head>
<body>
  <!-- Content in English -->
</body>
</html>

<!-- Angular component with language support -->
@Component({
  selector: 'app-root',
  template: \`
    <div [attr.lang]="currentLanguage">
      <h1>{{pageTitle}}</h1>
      <p>{{pageDescription}}</p>
    </div>
  \`
})
export class AppComponent {
  currentLanguage = 'en';
  pageTitle = 'ADA Compliance Guide';
  pageDescription = 'Complete guide to building accessible applications.';
  
  setLanguage(lang: string) {
    this.currentLanguage = lang;
    document.documentElement.lang = lang;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Language Changes</h3>
        <p>Indicate when content changes to a different language.</p>
        
        <div className="code-block">
          <pre>
{`@Component({
  template: \`
    <p>Welcome to our application.</p>
    <p lang="es">Bienvenido a nuestra aplicación.</p>
    <p lang="fr">Bienvenue dans notre application.</p>
    
    <!-- For longer passages -->
    <blockquote lang="de">
      <p>Dies ist ein längerer Text auf Deutsch.</p>
      <p>Er enthält mehrere Absätze.</p>
    </blockquote>
    
    <!-- Dynamic language changes -->
    <div [attr.lang]="getLanguageForContent(content)">
      {{content}}
    </div>
  \`
})
export class MultilingualComponent {
  getLanguageForContent(content: string): string {
    // Logic to determine content language
    if (content.includes('hola') || content.includes('gracias')) {
      return 'es';
    }
    return 'en';
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'captions-video': (
    <section id="captions-video" className="section">
      <h2>Captions for Video <span className="badge">WCAG 2.1 AA 1.2.2</span></h2>
      
      <div className="guideline">
        <h3>Synchronized Captions</h3>
        <p>Provide synchronized captions for all video content that contains speech.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Video with captions -->
<video controls>
  <source src="presentation.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="presentation-captions.vtt" 
    srclang="en" 
    label="English"
    default>
  <track 
    kind="captions" 
    src="presentation-captions-es.vtt" 
    srclang="es" 
    label="Español">
  Your browser does not support the video tag.
</video>

<!-- Angular component with video captions -->
@Component({
  selector: 'app-video-player',
  template: \`
    <div class="video-container">
      <video 
        #videoPlayer
        controls
        [attr.aria-describedby]="'video-description-' + videoId">
        <source [src]="videoSrc" [type]="videoType">
        <track 
          *ngFor="let caption of captions"
          kind="captions"
          [src]="caption.src"
          [srclang]="caption.language"
          [label]="caption.label"
          [default]="caption.isDefault">
      </video>
      
      <div [id]="'video-description-' + videoId" class="sr-only">
        {{videoDescription}}
      </div>
      
      <div class="caption-controls">
        <button 
          *ngFor="let caption of captions"
          (click)="selectCaption(caption)"
          [class.active]="caption.isDefault">
          {{caption.label}}
        </button>
      </div>
    </div>
  \`
})
export class VideoPlayerComponent {
  @Input() videoId: string = '';
  @Input() videoSrc: string = '';
  @Input() videoType: string = 'video/mp4';
  @Input() videoDescription: string = '';
  
  captions = [
    { src: 'captions-en.vtt', language: 'en', label: 'English', isDefault: true },
    { src: 'captions-es.vtt', language: 'es', label: 'Español', isDefault: false }
  ];
  
  selectCaption(caption: any) {
    this.captions.forEach(c => c.isDefault = false);
    caption.isDefault = true;
    // Update video track
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Live Captions</h3>
        <p>Provide captions for live video content.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Live video with real-time captions -->
<video controls>
  <source src="live-stream.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="live-captions.vtt" 
    srclang="en" 
    label="Live Captions">
</video>

<!-- WebVTT file example (live-captions.vtt) -->
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to our live presentation

00:00:04.500 --> 00:00:07.000
Today we'll discuss accessibility

00:00:07.500 --> 00:00:10.000
and how to implement it properly`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'audio-description': (
    <section id="audio-description" className="section">
      <h2>Audio Description <span className="badge">WCAG 2.1 AA 1.2.3</span></h2>
      
      <div className="guideline">
        <h3>Audio Descriptions for Video</h3>
        <p>Provide audio descriptions for video content where visual information is important to understanding.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Video with audio description -->
<video controls>
  <source src="presentation.mp4" type="video/mp4">
  <track 
    kind="descriptions" 
    src="presentation-description.vtt" 
    srclang="en" 
    label="Audio Description">
  <track 
    kind="captions" 
    src="presentation-captions.vtt" 
    srclang="en" 
    label="Captions">
</video>

<!-- Angular component with audio description -->
@Component({
  selector: 'app-accessible-video',
  template: \`
    <div class="video-wrapper">
      <video 
        #video
        controls
        [attr.aria-describedby]="'video-info-' + videoId">
        <source [src]="videoSrc" [type]="videoType">
        <track 
          kind="descriptions"
          [src]="audioDescriptionSrc"
          srclang="en"
          label="Audio Description">
        <track 
          kind="captions"
          [src]="captionsSrc"
          srclang="en"
          label="Captions">
      </video>
      
      <div [id]="'video-info-' + videoId" class="video-info">
        <p><strong>Title:</strong> {{videoTitle}}</p>
        <p><strong>Duration:</strong> {{videoDuration}}</p>
        <p><strong>Description:</strong> {{videoDescription}}</p>
        <p><strong>Audio Description:</strong> Available</p>
        <p><strong>Captions:</strong> Available</p>
      </div>
      
      <div class="accessibility-controls">
        <button 
          (click)="toggleAudioDescription()"
          [class.active]="audioDescriptionEnabled">
          Audio Description
        </button>
        <button 
          (click)="toggleCaptions()"
          [class.active]="captionsEnabled">
          Captions
        </button>
      </div>
    </div>
  \`
})
export class AccessibleVideoComponent {
  @Input() videoId: string = '';
  @Input() videoSrc: string = '';
  @Input() videoType: string = 'video/mp4';
  @Input() videoTitle: string = '';
  @Input() videoDuration: string = '';
  @Input() videoDescription: string = '';
  @Input() audioDescriptionSrc: string = '';
  @Input() captionsSrc: string = '';
  
  audioDescriptionEnabled = false;
  captionsEnabled = false;
  
  toggleAudioDescription() {
    this.audioDescriptionEnabled = !this.audioDescriptionEnabled;
    // Enable/disable audio description track
  }
  
  toggleCaptions() {
    this.captionsEnabled = !this.captionsEnabled;
    // Enable/disable captions track
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>When Audio Description is Required</h3>
        <p>Audio descriptions are needed when visual information is not conveyed through the audio track.</p>
        
        <div className="highlight">
          <strong>Examples requiring audio description:</strong>
          <ul>
            <li>Charts, graphs, or diagrams shown without verbal explanation</li>
            <li>Actions or gestures that are important to understanding</li>
            <li>Text displayed on screen that is not read aloud</li>
            <li>Visual-only content like silent films or animations</li>
          </ul>
        </div>
      </div>
    </section>
  ),
  'data-tables': (
    <section id="data-tables" className="section">
      <h2>Data Tables <span className="badge">WCAG 2.1 AA 1.3.1</span></h2>
      
      <div className="guideline">
        <h3>Table Headers and Relationships</h3>
        <p>Use proper table markup with headers to establish relationships between data cells.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Simple data table with headers -->
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Units Sold</th>
      <th scope="col">Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$50,000</td>
      <td>1,250</td>
      <td>+5%</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$52,000</td>
      <td>1,300</td>
      <td>+4%</td>
    </tr>
  </tbody>
</table>

<!-- Angular component with accessible table -->
@Component({
  selector: 'app-data-table',
  template: \`
    <table [attr.aria-describedby]="'table-description-' + tableId">
      <caption>{{tableCaption}}</caption>
      <thead>
        <tr>
          <th 
            *ngFor="let column of columns" 
            [scope]="'col'"
            [attr.aria-sort]="getSortDirection(column.key)">
            {{column.label}}
            <button 
              (click)="sortBy(column.key)"
              [attr.aria-label]="'Sort by ' + column.label"
              class="sort-button">
              {{getSortIcon(column.key)}}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of sortedData; let i = index">
          <th 
            *ngFor="let column of columns; let j = index"
            [scope]="j === 0 ? 'row' : null"
            [attr.aria-describedby]="'col-' + column.key">
            {{row[column.key]}}
          </th>
        </tr>
      </tbody>
    </table>
    
    <div [id]="'table-description-' + tableId" class="sr-only">
      {{tableDescription}}
    </div>
  \`
})
export class DataTableComponent {
  @Input() tableId: string = '';
  @Input() tableCaption: string = '';
  @Input() tableDescription: string = '';
  @Input() columns: Array<{key: string, label: string}> = [];
  @Input() data: any[] = [];
  
  sortedData: any[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  
  ngOnInit() {
    this.sortedData = [...this.data];
  }
  
  sortBy(columnKey: string) {
    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnKey;
      this.sortDirection = 'asc';
    }
    
    this.sortedData.sort((a, b) => {
      const aVal = a[columnKey];
      const bVal = b[columnKey];
      
      if (this.sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }
  
  getSortDirection(columnKey: string): string {
    if (this.sortColumn === columnKey) {
      return this.sortDirection;
    }
    return 'none';
  }
  
  getSortIcon(columnKey: string): string {
    if (this.sortColumn === columnKey) {
      return this.sortDirection === 'asc' ? '↑' : '↓';
    }
    return '↕';
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Complex Tables</h3>
        <p>For complex tables, use additional ARIA attributes to clarify relationships.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Complex table with multiple header levels -->
<table>
  <caption>Product Inventory by Region</caption>
  <thead>
    <tr>
      <th scope="col" rowspan="2">Product</th>
      <th scope="colgroup" colspan="2">North Region</th>
      <th scope="colgroup" colspan="2">South Region</th>
    </tr>
    <tr>
      <th scope="col">In Stock</th>
      <th scope="col">On Order</th>
      <th scope="col">In Stock</th>
      <th scope="col">On Order</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Widget A</th>
      <td>150</td>
      <td>25</td>
      <td>200</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

<!-- Angular component for complex tables -->
@Component({
  template: \`
    <table>
      <caption>{{tableCaption}}</caption>
      <thead>
        <tr *ngFor="let headerRow of headerRows; let i = index">
          <th 
            *ngFor="let cell of headerRow"
            [scope]="cell.scope"
            [rowspan]="cell.rowspan"
            [colspan]="cell.colspan"
            [attr.aria-describedby]="cell.description">
            {{cell.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let dataRow of dataRows">
          <th 
            *ngFor="let cell of dataRow; let j = index"
            [scope]="j === 0 ? 'row' : null">
            {{cell}}
          </th>
        </tr>
      </tbody>
    </table>
  \`
})
export class ComplexTableComponent {
  tableCaption = 'Complex Data Table';
  headerRows = [
    [
      { text: 'Product', scope: 'col', rowspan: 2, colspan: 1 },
      { text: 'North Region', scope: 'colgroup', rowspan: 1, colspan: 2 },
      { text: 'South Region', scope: 'colgroup', rowspan: 1, colspan: 2 }
    ],
    [
      { text: 'In Stock', scope: 'col', rowspan: 1, colspan: 1 },
      { text: 'On Order', scope: 'col', rowspan: 1, colspan: 1 },
      { text: 'In Stock', scope: 'col', rowspan: 1, colspan: 1 },
      { text: 'On Order', scope: 'col', rowspan: 1, colspan: 1 }
    ]
  ];
  dataRows = [
    ['Widget A', '150', '25', '200', '50'],
    ['Widget B', '75', '10', '100', '20']
  ];
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'status-messages': (
    <section id="status-messages" className="section">
      <h2>Status Messages <span className="badge">WCAG 2.1 AA 4.1.3</span></h2>
      
      <div className="guideline">
        <h3>ARIA Live Regions</h3>
        <p>Use ARIA live regions to announce dynamic content changes to screen readers.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Status message with ARIA live region -->
<div 
  aria-live="polite" 
  aria-atomic="true"
  class="status-message"
  [attr.aria-label]="statusMessage">
  {{statusMessage}}
</div>

<!-- Angular component with live regions -->
@Component({
  selector: 'app-status-announcer',
  template: \`
    <!-- Polite announcements for non-critical updates -->
    <div 
      aria-live="polite" 
      aria-atomic="true"
      class="sr-only"
      [attr.aria-label]="politeMessage">
      {{politeMessage}}
    </div>
    
    <!-- Assertive announcements for critical updates -->
    <div 
      aria-live="assertive" 
      aria-atomic="true"
      class="sr-only"
      [attr.aria-label]="assertiveMessage">
      {{assertiveMessage}}
    </div>
    
    <!-- Status updates in the UI -->
    <div class="status-container">
      <div 
        *ngIf="statusMessage"
        class="status-banner"
        [class]="statusType"
        role="status"
        aria-live="polite">
        {{statusMessage}}
      </div>
      
      <div 
        *ngIf="errorMessage"
        class="error-banner"
        role="alert"
        aria-live="assertive">
        {{errorMessage}}
      </div>
    </div>
  \`
})
export class StatusAnnouncerComponent {
  politeMessage = '';
  assertiveMessage = '';
  statusMessage = '';
  errorMessage = '';
  
  announcePolite(message: string) {
    this.politeMessage = message;
    // Clear after announcement
    setTimeout(() => this.politeMessage = '', 1000);
  }
  
  announceAssertive(message: string) {
    this.assertiveMessage = message;
    // Clear after announcement
    setTimeout(() => this.assertiveMessage = '', 1000);
  }
  
  showStatus(message: string, type: 'success' | 'info' | 'warning' = 'info') {
    this.statusMessage = message;
    this.statusType = type;
    // Auto-hide after 5 seconds
    setTimeout(() => this.statusMessage = '', 5000);
  }
  
  showError(message: string) {
    this.errorMessage = message;
    // Auto-hide after 10 seconds
    setTimeout(() => this.errorMessage = '', 10000);
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Progress Indicators</h3>
        <p>Provide accessible progress indicators for long-running operations.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Progress bar with ARIA attributes -->
<div class="progress-container">
  <div 
    class="progress-bar"
    role="progressbar"
    [attr.aria-valuenow]="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    [attr.aria-valuetext]="progressText">
    <div 
      class="progress-fill"
      [style.width.%]="progress">
    </div>
  </div>
  <div class="progress-text">{{progressText}}</div>
</div>

<!-- Angular component with progress tracking -->
@Component({
  selector: 'app-progress-tracker',
  template: \`
    <div class="progress-wrapper">
      <div 
        class="progress-bar"
        role="progressbar"
        [attr.aria-valuenow]="currentProgress"
        aria-valuemin="0"
        aria-valuemax="100"
        [attr.aria-valuetext]="progressDescription">
        <div 
          class="progress-fill"
          [style.width.%]="currentProgress">
        </div>
      </div>
      
      <div class="progress-info">
        <span class="progress-text">{{progressDescription}}</span>
        <span class="progress-percentage">{{currentProgress}}%</span>
      </div>
      
      <div 
        *ngIf="statusMessage"
        class="status-message"
        role="status"
        aria-live="polite">
        {{statusMessage}}
      </div>
    </div>
  \`
})
export class ProgressTrackerComponent {
  currentProgress = 0;
  progressDescription = 'Loading...';
  statusMessage = '';
  
  updateProgress(progress: number, description: string) {
    this.currentProgress = progress;
    this.progressDescription = description;
    
    if (progress === 100) {
      this.statusMessage = 'Operation completed successfully';
    } else if (progress > 0) {
      this.statusMessage = \`Processing... \${progress}% complete\`;
    }
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'target-size': (
    <section id="target-size" className="section">
      <h2>Target Size <span className="badge">WCAG 2.1 AA 2.5.5</span></h2>
      
      <div className="guideline">
        <h3>Minimum Touch Target Size</h3>
        <p>Ensure touch targets are at least 44px × 44px to accommodate users with motor disabilities.</p>
        
        <div className="code-block">
          <pre>
{`/* CSS for minimum touch target size */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* For smaller visual elements, use padding */
.small-button {
  width: 24px;
  height: 24px;
  padding: 10px; /* Creates 44px × 44px touch target */
  border: none;
  background: transparent;
  cursor: pointer;
}

/* Angular component with proper touch targets */
@Component({
  selector: 'app-touch-friendly-buttons',
  template: \`
    <div class="button-group">
      <!-- Standard button with proper touch target -->
      <button 
        class="touch-target primary-button"
        (click)="handleAction('primary')"
        [attr.aria-label]="'Primary action: ' + primaryLabel">
        {{primaryLabel}}
      </button>
      
      <!-- Icon button with expanded touch target -->
      <button 
        class="icon-button touch-target"
        (click)="handleAction('delete')"
        aria-label="Delete item">
        <span class="icon">🗑️</span>
      </button>
      
      <!-- Small visual element with padding for touch target -->
      <button 
        class="small-button"
        (click)="handleAction('close')"
        aria-label="Close dialog">
        <span class="close-icon">×</span>
      </button>
    </div>
    
    <!-- Navigation with touch-friendly targets -->
    <nav class="touch-nav">
      <a 
        *ngFor="let item of navItems"
        [routerLink]="item.route"
        class="nav-link touch-target"
        [attr.aria-current]="isCurrentPage(item.route) ? 'page' : null">
        {{item.label}}
      </a>
    </nav>
  \`,
  styles: [\`
    .touch-target {
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    
    .primary-button {
      background: #007bff;
      color: white;
      padding: 12px 24px;
    }
    
    .icon-button {
      background: transparent;
      border: 1px solid #ddd;
      padding: 10px;
    }
    
    .small-button {
      width: 24px;
      height: 24px;
      padding: 10px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    
    .nav-link {
      text-decoration: none;
      color: #333;
      padding: 12px 16px;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    
    .nav-link:hover,
    .nav-link:focus {
      background-color: #f0f0f0;
      outline: 2px solid #007bff;
    }
    
    .nav-link[aria-current="page"] {
      background-color: #007bff;
      color: white;
    }
  \`]
})
export class TouchFriendlyButtonsComponent {
  primaryLabel = 'Submit';
  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  
  handleAction(action: string) {
    console.log('Action:', action);
  }
  
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }
}`}
          </pre>
        </div>
      </div>

      <div className="guideline">
        <h3>Spacing Between Targets</h3>
        <p>Provide adequate spacing between touch targets to prevent accidental activation.</p>
        
        <div className="code-block">
          <pre>
{`/* CSS for proper spacing between touch targets */
.button-group {
  display: flex;
  gap: 8px; /* Minimum spacing between buttons */
  align-items: center;
}

.touch-target {
  min-width: 44px;
  min-height: 44px;
  margin: 4px; /* Additional spacing */
}

/* For inline elements, ensure proper spacing */
.inline-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.inline-controls button {
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
}

/* Responsive considerations */
@media (max-width: 768px) {
  .button-group {
    gap: 12px; /* More spacing on mobile */
  }
  
  .touch-target {
    min-width: 48px; /* Slightly larger on mobile */
    min-height: 48px;
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  ),
  'input-purpose': (
    <section id="input-purpose" className="section">
      <h2>Input Purpose <span className="badge">WCAG 2.1 AA 1.3.5</span></h2>
      
      <div className="guideline">
        <h3>Autocomplete Attributes</h3>
        <p>Use autocomplete attributes to help users and assistive technologies understand input purpose.</p>
        
        <div className="code-block">
          <pre>
{`<!-- Form inputs with autocomplete attributes -->
<form>
  <label for="name">Full Name</label>
  <input 
    id="name"
    type="text"
    autocomplete="name"
    required>
  
  <label for="email">Email Address</label>
  <input 
    id="email"
    type="email"
    autocomplete="email"
    required>
  
  <label for="phone">Phone Number</label>
  <input 
    id="phone"
    type="tel"
    autocomplete="tel"
    required>
  
  <label for="address">Street Address</label>
  <input 
    id="address"
    type="text"
    autocomplete="street-address"
    required>
  
  <label for="city">City</label>
  <input 
    id="city"
    type="text"
    autocomplete="address-level2"
    required>
  
  <label for="zip">ZIP Code</label>
  <input 
    id="zip"
    type="text"
    autocomplete="postal-code"
    required>
</form>

<!-- Angular component with autocomplete -->
@Component({
  selector: 'app-accessible-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          formControlName="firstName"
          autocomplete="given-name"
          [attr.aria-invalid]="isFieldInvalid('firstName')"
          required>
      </div>
      
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          formControlName="lastName"
          autocomplete="family-name"
          [attr.aria-invalid]="isFieldInvalid('lastName')"
          required>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          id="email"
          type="email"
          formControlName="email"
          autocomplete="email"
          [attr.aria-invalid]="isFieldInvalid('email')"
          required>
      </div>
      
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          formControlName="phone"
          autocomplete="tel"
          [attr.aria-invalid]="isFieldInvalid('phone')"
          required>
      </div>
      
      <div class="form-group">
        <label for="organization">Organization</label>
        <input
          id="organization"
          type="text"
          formControlName="organization"
          autocomplete="organization"
          [attr.aria-invalid]="isFieldInvalid('organization')">
      </div>
      
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          type="text"
          formControlName="jobTitle"
          autocomplete="organization-title"
          [attr.aria-invalid]="isFieldInvalid('jobTitle')">
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
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      organization: [''],
      jobTitle: ['']
    });
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
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

      <div className="guideline">
        <h3>Common Autocomplete Values</h3>
        <p>Use appropriate autocomplete values for different types of input fields.</p>
        
        <div className="highlight">
          <strong>Common autocomplete attributes:</strong>
          <ul>
            <li><code>name</code> - Full name</li>
            <li><code>given-name</code> - First name</li>
            <li><code>family-name</code> - Last name</li>
            <li><code>email</code> - Email address</li>
            <li><code>tel</code> - Phone number</li>
            <li><code>street-address</code> - Street address</li>
            <li><code>postal-code</code> - ZIP/Postal code</li>
            <li><code>country</code> - Country</li>
            <li><code>organization</code> - Company/Organization</li>
            <li><code>organization-title</code> - Job title</li>
            <li><code>username</code> - Username</li>
            <li><code>current-password</code> - Current password</li>
            <li><code>new-password</code> - New password</li>
            <li><code>cc-name</code> - Credit card holder name</li>
            <li><code>cc-number</code> - Credit card number</li>
            <li><code>cc-exp</code> - Credit card expiration</li>
          </ul>
        </div>
      </div>
    </section>
  ),
  checklist: (
    <section id="checklist" className="section">
      <h2>Accessibility & Code Quality Checklist</h2>
      <ul>
        <li>Use semantic HTML and ARIA roles</li>
        <li>Ensure keyboard navigation and visible focus outlines</li>
        <li>Maintain sufficient color contrast</li>
        <li>Label all form fields and controls</li>
        <li>Provide alt text for images and media</li>
        <li>Test with screen readers and keyboard only</li>
        <li>Run ESLint with <code>next/core-web-vitals</code> and <code>next/typescript</code> rules</li>
        <li>Set up Husky to run <code>npm run lint</code> before commits</li>
        <li>Use automated tools like <code>axe-core</code> or Lighthouse for accessibility testing</li>
      </ul>
      <div className="code-block">
        <pre>{`
# Install Husky and add pre-commit hook
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm run lint"

# Run accessibility tests
npx axe .
# or use Lighthouse in Chrome DevTools
`}</pre>
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