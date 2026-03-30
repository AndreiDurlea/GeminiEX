# New Feature / Bugfix (choose one)

## Related issue (if any)
**[EDIT THIS]**
Closes #XX (the number of the GitHub issue this PR attempts to close, if any)

## Implementation description
**[EDIT THIS]**
Add horizontal scrolling to very wide Markdown tables so they no longer squish text to fit the screen.

## Changes made
**[EDIT THIS]**
- Added `overflow-x: auto;` to the `.markdown-table-wrapper` CSS class
- Wrapped each table in a scrollable container via `content.js`

## Testing media/logs (if any)
None provided
