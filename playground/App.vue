<template>
  <div class="spacing spacing--block">
    <ProgressBar :progress="progress" @click="randomProgress" />
    <ProgressBar :progress="progress" type="secondary" fixed />
  </div>

  <div class="spacing spacing--block">
    <h2>Avatar groups</h2>

    <AvatarGroup min="4">
      <Avatar><img src="https://picsum.photos/seed/12/200"/></Avatar>
      <Avatar><img src="https://picsum.photos/seed/22/200"/></Avatar>
      <Avatar><img src="https://picsum.photos/seed/32/200"/></Avatar>
    </AvatarGroup>

    Hello

    <div>
      <AvatarGroup>
        <Avatar type="dark">Y</Avatar>
        <Avatar type="secondary">X</Avatar>
        <Avatar>W</Avatar>
      </AvatarGroup>

      <AvatarGroup>
        <Avatar>Y</Avatar>
        <Avatar><img src="https://picsum.photos/seed/2/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/3/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/4/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/5/200"/></Avatar>
      </AvatarGroup>

      <AvatarGroup max="99">
        <Avatar><img src="https://picsum.photos/seed/1/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/2/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/3/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/4/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/5/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/11/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/21/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/31/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/41/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/51/200"/></Avatar>
      </AvatarGroup>

      <AvatarGroup max="99" narrow>
        <Avatar><img src="https://picsum.photos/seed/13/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/23/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/33/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/43/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/53/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/113/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/213/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/313/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/413/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/513/200"/></Avatar>
      </AvatarGroup>

      <AvatarGroup narrow>
        <Avatar><img src="https://picsum.photos/seed/15/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/25/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/35/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/45/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/55/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/115/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/215/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/315/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/415/200"/></Avatar>
        <Avatar><img src="https://picsum.photos/seed/515/200"/></Avatar>
      </AvatarGroup>
    </div>
  </div>

  <div class="spacing">
    <h2>Avatars</h2>

    <Avatar>JB</Avatar>
    <Avatar><img src="https://picsum.photos/200"/></Avatar>
  </div>

  <div class="spacing">
    <h2>Buttons</h2>

    <div>
      <Button>Text only</Button>
      <Button @click="toggleLoading" :loading="loading">Click to load</Button>
      <Button><Icon name="ambulance" /> Text</Button>
      <Button>Text <Icon name="ambulance"/></Button>
      <Button><Icon name="ambulance"/></Button>
    </div>

    <div>
      <Button type="secondary">Secondary button</Button>
      <Button type="info">Info button</Button>
    </div>
  </div>

  <div class="spacing spacing--block">
    <h2>Alerts</h2>

    <Alert>This is a default alert</Alert>
    <Alert icon>This is a default alert</Alert>
    <Alert :type="type" @click="toggleType" icon>This is a primary alert</Alert>
    <Alert type="info" icon>This is an info alert</Alert>
    <Alert type="danger" icon>This is a danger alert</Alert>
    <Alert icon="ambulance">This is a default alert with a custom icon</Alert>
    <Alert outline>This is an outlined alert</Alert>
    <Alert outline icon>This is an outlined alert with icon</Alert>
    <Alert inline>This is an inlined alert</Alert>
    <Alert text>This is a text alert</Alert>
  </div>

  <div class="spacing">
    <h2>Grid</h2>

    <Grid class="grid">
      <GridRow class="grid__row">
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
      </GridRow>

      <GridRow class="grid__row">
        <GridCol class="grid__row__col" :lg="{ size: 6, order: 3 }">Moving col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
      </GridRow>

      <GridRow class="grid__row">
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
        <GridCol class="grid__row__col">Col</GridCol>
      </GridRow>
    </Grid>
  </div>

  <div class="spacing spacing--block">
    <h2>Containers</h2>

    <Container class="container">Default container</Container>

    <Container center class="container">Center container</Container>

    <Container fluid class="container">Fluid container</Container>
  </div>

  <div class="spacing spacing--horizontal">
    <Badge value="99">
      <Button>Text only</Button>
    </Badge>

    <Badge value="11" max="9" min="5">
      <Button>Text only</Button>
    </Badge>

    <Badge value="5" pulse>
      <Button>Text only</Button>
    </Badge>

    <Badge value="5" max="5" min="2" dot>
      <Button>Text only</Button>
    </Badge>

    <Badge value="New">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" position="bottom-left">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" position="bottom-right">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" position="top-left">
      <Button>Text only</Button>
    </Badge>
  </div>

  <div class="spacing spacing--horizontal">
    <Badge value="99" type="secondary">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" type="warning">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" type="info">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" type="info" pulse>
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" type="dark">
      <Button>Text only</Button>
    </Badge>

    <Badge value="99" type="dark" pulse>
      <Button>Text only</Button>
    </Badge>
  </div>

  <div class="spacing">
    <div class="icons">
      <div class="icons__icon" v-for="icon in icons" :key="icon">
        <div class="icons__icon__icon">
          <Icon :name="icon.iconName" />
        </div>
        <span>{{ icon.iconName }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { random } from "lodash-es";
import { defineComponent, ref } from "vue";
import Alert from "../src/components/alert/Alert.vue";
import Avatar from "../src/components/avatar/Avatar.vue";
import AvatarGroup from "../src/components/avatar/AvatarGroup.vue";
import Badge from "../src/components/badge/Badge.vue";
import Button from "../src/components/button/Button.vue";
import Container from "../src/components/container/Container.vue";
import Grid from "../src/components/grid/Grid.vue";
import GridCol from "../src/components/grid/GridCol.vue";
import GridRow from "../src/components/grid/GridRow.vue";
import Icon, { icons } from "../src/components/icon/Icon.vue";
import ProgressBar from "../src/components/progress/ProgressBar.vue";

export default defineComponent({
  name: "App",
  components: {
    ProgressBar,
    AvatarGroup,
    Avatar,
    Badge,
    Icon,
    Button,
    Alert,
    Grid,
    GridRow,
    GridCol,
    Container
  },
  setup() {
    const loading = ref(false);
    const type = ref("primary");
    const progress = ref(40);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    const toggleType = () => {
      type.value = type.value === "primary" ? "secondary" : "primary";
    };

    const randomProgress = () => {
      progress.value = random(0, 100);
    };

    return {
      toggleLoading,
      toggleType,
      randomProgress,
      progress,
      loading,
      type,
      icons
    };
  }
});
</script>

<style lang="scss">
@use "../src/theming";

@include theming.all();

body {
  margin: 4em;
}

.spacing {
  margin: 4em 0;

  &--block {
    > div {
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }

  &--horizontal {
    > div {
      margin-right: 1em;
    }
  }
}

.grid {
  //background: rgba(blue, 0.1);

  .grid__row {
    //background: rgba(blue, 0.1);

    .grid__row__col {
      background: rgba(blue, 0.1);
    }
  }
}

.container {
  background: rgba(blue, 0.1);
  padding: 1em;
}

.icons {
  display: flex;
  flex-wrap: wrap;

  .icons__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    font-size: 1.5em;
    padding: 1em;

    .icons__icon__icon {
      width: 1em;
      height: 1em;
      background: #eee;
      margin-bottom: 0.5em;
    }

    span {
      display: block;
      font-size: 0.5em;
      text-align: center;
    }
  }
}
</style>
