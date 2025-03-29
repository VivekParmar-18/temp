import { Select, MenuItem, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        label="Language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="gu">ગુજરાતી</MenuItem>
        <MenuItem value="hi">हिन्दी</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageToggle;