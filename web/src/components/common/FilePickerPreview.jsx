import * as React from 'react';
import { Box, Typography, Button, ImageList, ImageListItem } from '@mui/material';

export default function FilePickerPreview({ accept = 'image/*', multiple = true, onFiles, files = [] }) {
  const inputRef = React.useRef(null);
  const [previews, setPreviews] = React.useState([]);

  React.useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  return (
    <Box>
      <Button variant="contained" onClick={() => inputRef.current?.click()}>Selecionar imagens</Button>
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        * PNG ou JPG
      </Typography>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        hidden
        onChange={(e) => onFiles(Array.from(e.target.files || []))}
      />
      {previews.length > 0 && (
        <ImageList cols={6} gap={8} sx={{ mt: 2 }}>
          {previews.map((src, i) => (
            <ImageListItem key={i}>
              <img src={src} alt={`preview-${i}`} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
