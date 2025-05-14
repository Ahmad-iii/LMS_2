// AWKUM LMS Theme Configuration
export const baseColors = {
  // Primary Colors
  maroon: '#800020',
  green: '#1E8449',
  beige: '#F2EFE6',
  beigeLight: '#F7F5F0',
  beigeDark: '#E8E4D9',
  
  // Text Colors
  text: {
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    light: '#717171'
  }
};

export const roleThemes = {
  admin: {
    primary: baseColors.maroon,
    secondary: '#9B002D',
    accent: '#FFD700',
    sidebar: {
      bg: baseColors.beigeLight,
      activeLink: baseColors.maroon,
      hoverLink: baseColors.beigeDark
    },
    header: {
      bg: `linear-gradient(to right, ${baseColors.maroon}, #9B002D)`
    }
  },
  teacher: {
    primary: baseColors.green,
    secondary: '#166335',
    accent: '#4CAF50',
    sidebar: {
      bg: baseColors.beigeLight,
      activeLink: baseColors.green,
      hoverLink: baseColors.beigeDark
    },
    header: {
      bg: `linear-gradient(to right, ${baseColors.green}, #166335)`
    }
  },
  student: {
    primary: '#5D6D7E',
    secondary: '#34495E',
    accent: '#3498DB',
    sidebar: {
      bg: baseColors.beigeLight,
      activeLink: '#34495E',
      hoverLink: baseColors.beigeDark
    },
    header: {
      bg: `linear-gradient(to right, #5D6D7E, #34495E)`
    }
  }
};
