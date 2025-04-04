import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface Legend {
  'Last Month': boolean;
  'This Month': boolean;
}

interface LegendToggleButtonProps {
  name: keyof Legend;
  icon?: string;
  svgIcon?: React.ComponentType<SvgIconProps>;
  color: string;
  value?: string;
  legend: Legend;
  onHandleLegendToggle: (name: string | number) => void;
}

const LegendToggleButton: React.FC<LegendToggleButtonProps> = ({
  name,
  icon,
  svgIcon: SvgIcon,
  color,
  value,
  legend,
  onHandleLegendToggle,
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton
        size="small"
        onClick={() => onHandleLegendToggle(name)}
        sx={{
          backgroundColor: legend[name] ? color : 'transparent',
          border: `1px solid ${color}`,
          '&:hover': {
            backgroundColor: legend[name] ? color : 'transparent',
          },
        }}
      >
        {icon ? (
          <Typography variant="body2" color={legend[name] ? 'white' : color}>
            {icon}
          </Typography>
        ) : SvgIcon ? (
          <SvgIcon sx={{ color: legend[name] ? 'white' : color }} />
        ) : null}
      </IconButton>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        {value && (
          <Typography variant="subtitle2" color="text.primary">
            {value}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default LegendToggleButton; 