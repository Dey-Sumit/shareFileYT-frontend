export const sizeInMb = (bytes: number): string =>
  `${(bytes / (1024 * 1024)).toFixed(2)} MB `;
