import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customTheme = {
    dark: true,
    colors: {
        // Background
        background: '#1E1E1E',
        surface: '#1E1E1E',
        'surface-bright': '#1E1E1E',
        'surface-light': '#1E1E1E',
        // Primary
        primary: '#58C4DC',
        'primary-darken-1': '#3FA7BF',
        // Secondary
        secondary: '#1B6D7F',
        'secondary-darken-1': '#155A6A',
        // Alerts
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        // Text
        'on-background': '#F9FAFB',
        'on-surface': '#F9FAFB',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-error': '#FFFFFF',
        'on-info': '#FFFFFF',
        'on-success': '#FFFFFF',
        'on-warning': '#000000',
        'surface-variant': '#2E2E2E',
        'on-surface-variant': '#E0E0E0',
        'grey-darken-1': '#2E2E2E',
        'grey-lighten-1': '#3E3E3E',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme: customTheme,
        }
    }
});

export default vuetify