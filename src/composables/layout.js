import { ref, computed, onMounted, onUnmounted } from 'vue';

// Viewport
const viewportWidth = ref(0);
const viewportHeight = ref(0);

const viewportBreakpoints = {
    mobile: { maxWidth: 767 },
    tablet: { minWidth: 768, maxWidth: 1023 },
    desktop: { minWidth: 1024 }
};

// Site Header & Scroll
const headerHeight = ref(0);
const isScrolled = ref(false);
const scrollThreshold = 50;

let setupComplete = false;

export function useLayout() {

    // Viewport
    const isMobile = computed(() => viewportWidth.value <= viewportBreakpoints.mobile.maxWidth);
    const isTablet = computed(() => viewportWidth.value >= viewportBreakpoints.tablet.minWidth && viewportWidth.value <= viewportBreakpoints.tablet.maxWidth);
    const isDesktop = computed(() => viewportWidth.value >= viewportBreakpoints.desktop.minWidth);

    const getDeviceType = computed(() => {
        if (isMobile.value) return 'mobile';
        if (isTablet.value) return 'tablet';
        return 'desktop';
    });

    const updateViewportDimensions = () => {
        viewportWidth.value = window.innerWidth;
        viewportHeight.value = window.innerHeight;
    };

    // Site Header & Scroll
    const getHeaderHeight = () => {
        const headerElement = document.getElementById("site-header");
        if (headerElement) {
            headerHeight.value = headerElement.offsetHeight;
        }
    };

    const updateScrollState = () => {
        isScrolled.value = window.scrollY > scrollThreshold;
    };

    // Setup
    const handleResize = () => {
        updateViewportDimensions();
        getHeaderHeight();
    };

    const handleScroll = () => {
        updateScrollState();
    };

    const setup = () => {
        if (!setupComplete) {
            updateViewportDimensions();
            getHeaderHeight();
            updateScrollState();
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
            setupComplete = true;

            onUnmounted(() => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll);
                setupComplete = false;
            });
        }
    };

    onMounted(setup);

    return {
        // Viewport
        viewportWidth,
        viewportHeight,
        isMobile,
        isTablet,
        isDesktop,
        getDeviceType,
        // Site Header & Scroll
        headerHeight,
        isScrolled,
    };
}