```markdown
# Recurrly Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the Recurrly codebase, a TypeScript project built with React. It covers file naming, import/export styles, commit message conventions, and testing patterns to ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names.
  - Example: `userProfile.tsx`, `billingInfo.ts`

### Import Style
- Use **alias imports** for modules.
  - Example:
    ```typescript
    import UserProfile from 'components/userProfile';
    ```

### Export Style
- Use **default exports** for modules.
  - Example:
    ```typescript
    const BillingInfo = () => { /* ... */ };
    export default BillingInfo;
    ```

### Commit Messages
- Follow **conventional commit** format.
- Use the `feat` prefix for new features.
  - Example:
    ```
    feat: add billing info component
    ```
- Average commit message length: ~56 characters.

## Workflows

### Creating a New Feature
**Trigger:** When adding a new feature or component  
**Command:** `/new-feature`

1. Create a new file using camelCase naming (e.g., `newComponent.tsx`).
2. Implement the component using React and TypeScript.
3. Use alias imports for dependencies.
4. Export the component as default.
5. Write a test file named `newComponent.test.tsx`.
6. Commit changes with a conventional message:
    ```
    feat: add newComponent for feature X
    ```

### Refactoring Code
**Trigger:** When updating or improving existing code  
**Command:** `/refactor`

1. Identify the file(s) to refactor.
2. Apply changes while maintaining camelCase naming and alias imports.
3. Ensure default exports are preserved.
4. Update or add relevant tests (`*.test.tsx`).
5. Commit with a descriptive message:
    ```
    feat: refactor billingInfo for performance
    ```

## Testing Patterns

- Test files use the pattern: `*.test.*` (e.g., `userProfile.test.tsx`).
- Place test files alongside the component or in a dedicated test directory.
- Testing framework is not specified; follow standard React/TypeScript testing practices.

  Example test file:
  ```typescript
  // userProfile.test.tsx
  import UserProfile from 'components/userProfile';

  describe('UserProfile', () => {
    it('renders correctly', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command       | Purpose                                    |
|---------------|--------------------------------------------|
| /new-feature  | Scaffold and commit a new feature/component|
| /refactor     | Refactor existing code and update tests    |
```
