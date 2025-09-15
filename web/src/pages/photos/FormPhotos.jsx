import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box, Button, Card, CardContent, CardHeader, Stack, TextField } from '@mui/material';
import FilePickerPreview from '../../components/common/FilePickerPreview';

function FormPhotos({ handleSubmit, onFiles, files = [] }) {
  return (
    <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
      <Card>
        <CardHeader title="Upload de fotos" />
        <CardContent>
          <Stack spacing={2}>
            <Field
              name="title"
              component={({ input, meta }) => (
                <TextField
                  label="Título do conjunto de imagens"
                  fullWidth
                  {...input}
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            />
            <FilePickerPreview files={files} onFiles={onFiles} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="submit" variant="contained" color="success">Cadastrar</Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}

export default reduxForm({ form: 'newFormPhotos' })(FormPhotos);
