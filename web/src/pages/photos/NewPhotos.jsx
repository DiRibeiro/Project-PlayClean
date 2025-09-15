import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPhotos, getPhotos, deleteGallery, deleteSingleImg } from '../../actions/photosActions';
import { Box, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Button, ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import BASE_URL from '../../config/consts';
import FormPhotos from './FormPhotos';

export default function NewPhotos() {
  const dispatch = useDispatch();
  const galleries = useSelector((s) => s.photos.photo);

  const [files, setFiles] = React.useState([]);
  const [title, setTitle] = React.useState('');

  const [viewer, setViewer] = React.useState({ open: false, galleryIdx: -1, imageIdx: 0 });

  React.useEffect(() => { dispatch(getPhotos()); }, [dispatch]);

  const onFiles = React.useCallback((arr) => setFiles(arr), []);
  const onSubmit = React.useCallback(() => {
    const fd = new FormData();
    files.forEach((img) => fd.append('images', img));
    fd.append('title', title);
    setFiles([]);
    setTitle('');
    dispatch(postPhotos(fd));
  }, [dispatch, files, title]);

  const openViewer = (galleryIdx, imageIdx = 0) => setViewer({ open: true, galleryIdx, imageIdx });
  const closeViewer = () => setViewer((v) => ({ ...v, open: false }));
  const prev = () =>
    setViewer((v) => {
      const g = galleries[v.galleryIdx];
      const idx = v.imageIdx === 0 ? g.images.length - 1 : v.imageIdx - 1;
      return { ...v, imageIdx: idx };
    });
  const next = () =>
    setViewer((v) => {
      const g = galleries[v.galleryIdx];
      const idx = v.imageIdx === g.images.length - 1 ? 0 : v.imageIdx + 1;
      return { ...v, imageIdx: idx };
    });

  const doDeleteGallery = () => {
    const g = galleries[viewer.galleryIdx];
    if (g?._id) dispatch(deleteGallery(g._id));
    closeViewer();
  };
  const doDeleteImage = () => {
    const g = galleries[viewer.galleryIdx];
    if (g?._id) dispatch(deleteSingleImg(g._id, viewer.imageIdx));
  };

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Card>
        <CardHeader title="Upload de fotos" />
        <CardContent>
          <FormPhotos
            onFiles={onFiles}
            files={files}
            onSubmit={onSubmit}
            initialValues={{ title }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Galerias" />
        <CardContent>
          <ImageList cols={5} gap={8}>
            {galleries.map((g, gi) => (
              <ImageListItem key={g._id ?? gi} sx={{ cursor: 'pointer' }} onClick={() => openViewer(gi, 0)}>
                <img src={`${BASE_URL}/${g.images[0]}`} alt={g.title} loading="lazy" />
                <ImageListItemBar
                  title={g.title}
                  actionIcon={
                    <IconButton aria-label="Deletar galeria" onClick={(e) => { e.stopPropagation(); dispatch(deleteGallery(g._id)); }}>
                      <DeleteIcon sx={{ color: 'white' }} />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
      </Card>

      {/* Viewer */}
      <Dialog open={viewer.open} onClose={closeViewer} maxWidth="md" fullWidth>
        {viewer.galleryIdx >= 0 && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6">{galleries[viewer.galleryIdx]?.title}</Typography>
              <IconButton onClick={closeViewer}><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <IconButton onClick={prev}><ArrowBackIosNewIcon /></IconButton>
                <img
                  src={`${BASE_URL}/${galleries[viewer.galleryIdx].images[viewer.imageIdx]}`}
                  alt="item"
                  style={{ maxWidth: '100%', maxHeight: 520 }}
                />
                <IconButton onClick={next}><ArrowForwardIosIcon /></IconButton>
              </Box>
              <Typography sx={{ mt: 1 }} align="center">
                Foto {viewer.imageIdx + 1} de {galleries[viewer.galleryIdx].images.length}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 2, gap: 1 }}>
              <Button color="error" variant="outlined" onClick={doDeleteGallery}>Deletar Galeria</Button>
              <Button color="warning" variant="outlined" onClick={doDeleteImage}>Deletar Imagem</Button>
              <Button variant="contained" onClick={closeViewer}>Fechar</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
