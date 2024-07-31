import ExternalLink from './Clickable/ExternalLink.vue';
import InternalLink from './Clickable/InternalLink.vue';
import FlexContainer from './Containment/FlexContainer.vue';
import GridContainer from './Containment/GridContainer.vue';
import AccentText from './Typography/AccentText.vue';

const components = {
    ExternalLink,
    InternalLink,
    FlexContainer,
    GridContainer,
    AccentText,
}

export default {
    install(app) {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        })
    }
}