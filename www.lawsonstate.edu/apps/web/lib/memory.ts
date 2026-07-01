import * as fs from 'fs';
import * as path from 'path';

/**
 * Reads the generated markdown index file and returns its raw content.
 * The index file is created by the bulk_index_md script and lives at the project root.
 */
export async function getMemoryEntries(): Promise<string> {
  const filePath = path.join(process.cwd(), 'index_of_markdown_files.md');
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    return content;
  } catch (err) {
    console.error('Failed to read markdown index:', err);
    throw err;
  }
}
