<template>
  <div class="spacing">
    <h2>Progress bars</h2>

    <Grid>
      <GridRow size="6">
        <GridCol>
          <ProgressBar
            v-for="type in types"
            :key="type"
            :type="type"
            :progress="getRandomProgress()"
            class="bb-margin-bottom-4"
          />
        </GridCol>

        <GridCol>
          <ProgressBar
            v-for="type in types"
            :key="type"
            :type="type"
            :progress="getRandomProgress()"
            outline
            class="bb-margin-bottom-4"
          />
        </GridCol>
      </GridRow>
    </Grid>
  </div>

  <div class="spacing">
    <h2>Avatars</h2>

    <Grid>
      <GridRow size="6">
        <GridCol>
          <Avatar v-for="type in types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            B
          </Avatar>
        </GridCol>
      </GridRow>

      <GridRow size="12">
        <GridCol>
          <div style="font-size: 1.5em;">
            <Avatar v-for="type in types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
              B
            </Avatar>
          </div>
        </GridCol>
      </GridRow>

      <GridRow size="6">
        <GridCol>
          <Avatar v-for="(type, index) in types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
          </Avatar>
        </GridCol>
      </GridRow>

      <GridRow size="12">
        <GridCol>
          <div style="font-size: 1.5em;">
            <Avatar
              v-for="(type, index) in types"
              :key="type"
              :type="type"
              class="bb-margin-bottom-4 bb-margin-right-4"
            >
              <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
            </Avatar>
          </div>
        </GridCol>
      </GridRow>
    </Grid>
  </div>

  <div class="spacing">
    <h2>Avatar groups</h2>

    <Grid>
      <GridRow size="3" class="bb-margin-bottom-4">
        <GridCol>
          <AvatarGroup max="99">
            <Avatar v-for="avatar in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="avatar">{{ avatar }}</Avatar>
          </AvatarGroup>
        </GridCol>

        <GridCol>
          <AvatarGroup max="5">
            <Avatar v-for="avatar in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="avatar">{{ avatar }}</Avatar>
          </AvatarGroup>
        </GridCol>
      </GridRow>

      <GridRow size="3" class="bb-margin-bottom-4">
        <GridCol>
          <AvatarGroup max="99">
            <Avatar
              v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
              :key="avatar"
              :type="types[index]"
            >
              {{ avatar }}
            </Avatar>
          </AvatarGroup>
        </GridCol>

        <GridCol size="3" class="bb-margin-bottom-4">
          <AvatarGroup max="5">
            <Avatar
              v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
              :key="avatar"
              :type="types[index]"
            >
              {{ avatar }}
            </Avatar>
          </AvatarGroup>
        </GridCol>
      </GridRow>

      <GridRow size="3" class="bb-margin-bottom-8">
        <GridCol>
          <AvatarGroup max="99">
            <Avatar v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="avatar">
              <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
            </Avatar>
          </AvatarGroup>
        </GridCol>

        <GridCol>
          <AvatarGroup max="5">
            <Avatar v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']" :key="avatar">
              <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
            </Avatar>
          </AvatarGroup>
        </GridCol>
      </GridRow>

      <GridRow size="4" class="bb-margin-bottom-8">
        <GridCol>
          <div style="font-size: 1.5em">
            <AvatarGroup max="99">
              <Avatar
                v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
                :key="avatar"
                :type="types[index]"
              >
                {{ avatar }}
              </Avatar>
            </AvatarGroup>
          </div>
        </GridCol>

        <GridCol>
          <div style="font-size: 1.5em">
            <AvatarGroup max="5">
              <Avatar
                v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
                :key="avatar"
                :type="types[index]"
              >
                {{ avatar }}
              </Avatar>
            </AvatarGroup>
          </div>
        </GridCol>
      </GridRow>

      <GridRow size="4">
        <GridCol>
          <div style="font-size: 1.5em">
            <AvatarGroup max="99">
              <Avatar
                v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
                :key="avatar"
                :type="types[index]"
              >
                <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
              </Avatar>
            </AvatarGroup>
          </div>
        </GridCol>

        <GridCol>
          <div style="font-size: 1.5em">
            <AvatarGroup max="5">
              <Avatar
                v-for="(avatar, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
                :key="avatar"
                :type="types[index]"
              >
                <img :src="`https://picsum.photos/seed/${index + 1}/200`" />
              </Avatar>
            </AvatarGroup>
          </div>
        </GridCol>
      </GridRow>
    </Grid>
  </div>

  <div class="spacing">
    <h2>Buttons</h2>

    <Grid>
      <GridRow size="6" class="bb-margin-bottom-8">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            Continue
          </Button>

          <Button disabled>Continue</Button>
        </GridCol>

        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" outline class="bb-margin-bottom-4 bb-margin-right-4">
            Continue
          </Button>

          <Button disabled outline>Continue</Button>
        </GridCol>
      </GridRow>

      <GridRow size="6" class="bb-margin-bottom-8">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="key"></Icon>
            Login
          </Button>

          <Button disabled class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="key"></Icon>
            Login
          </Button>
        </GridCol>

        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" outline class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="key"></Icon>
            Login
          </Button>

          <Button disabled outline class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="key"></Icon>
            Login
          </Button>
        </GridCol>
      </GridRow>

      <GridRow size="6" class="bb-margin-bottom-8">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            Save
            <Icon name="save"></Icon>
          </Button>

          <Button disabled class="bb-margin-bottom-4 bb-margin-right-4">
            Save
            <Icon name="save"></Icon>
          </Button>
        </GridCol>

        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" outline class="bb-margin-bottom-4 bb-margin-right-4">
            Save
            <Icon name="save"></Icon>
          </Button>

          <Button disabled outline class="bb-margin-bottom-4 bb-margin-right-4">
            Save
            <Icon name="save"></Icon>
          </Button>
        </GridCol>
      </GridRow>

      <GridRow size="6" class="bb-margin-bottom-8">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="comment"></Icon>
          </Button>

          <Button disabled class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="comment"></Icon>
          </Button>
        </GridCol>

        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" outline class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="comment"></Icon>
          </Button>

          <Button disabled outline class="bb-margin-bottom-4 bb-margin-right-4">
            <Icon name="comment"></Icon>
          </Button>
        </GridCol>
      </GridRow>

      <GridRow size="6" class="bb-margin-bottom-8">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" loading class="bb-margin-bottom-4 bb-margin-right-4">
            Button
          </Button>

          <Button disabled loading class="bb-margin-bottom-4 bb-margin-right-4">
            Button
          </Button>
        </GridCol>

        <GridCol>
          <Button
            v-for="type of types"
            :key="type"
            :type="type"
            loading
            outline
            class="bb-margin-bottom-4 bb-margin-right-4"
          >
            Button
          </Button>

          <Button disabled loading outline class="bb-margin-bottom-4 bb-margin-right-4">
            Button
          </Button>
        </GridCol>
      </GridRow>

      <GridRow size="6">
        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" block class="bb-margin-bottom-4">
            <Icon name="comment"></Icon> Comment
          </Button>

          <Button disabled block class="bb-margin-bottom-4"> <Icon name="comment"></Icon> Comment </Button>
        </GridCol>

        <GridCol>
          <Button v-for="type of types" :key="type" :type="type" outline block class="bb-margin-bottom-4">
            <Icon name="comment"></Icon> Comment
          </Button>

          <Button disabled outline block class="bb-margin-bottom-4"> <Icon name="comment"></Icon> Comment </Button>
        </GridCol>
      </GridRow>
    </Grid>
  </div>

  <div class="spacing">
    <h2>Alerts</h2>

    <Grid>
      <GridRow xs="12" md="4" class="bb-margin-bottom-8">
        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" class="bb-margin-bottom-4">
            This is an alert
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" outline class="bb-margin-bottom-4">
            This is an outline alert
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" text class="bb-margin-bottom-4">
            This is a text alert
          </Alert>
        </GridCol>
      </GridRow>

      <GridRow size="4" class="bb-margin-bottom-8">
        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" icon class="bb-margin-bottom-4">
            This is an alert with default icon
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" icon outline class="bb-margin-bottom-4">
            This is an outline alert with default icon
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" icon text class="bb-margin-bottom-4">
            This is a text alert with default icon
          </Alert>
        </GridCol>
      </GridRow>

      <GridRow size="4" class="bb-margin-bottom-8">
        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" icon="comment" class="bb-margin-bottom-4">
            This is an alert with custom icon
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" outline icon="comment" class="bb-margin-bottom-4">
            This is an outline alert with custom icon
          </Alert>
        </GridCol>

        <GridCol>
          <Alert v-for="type of types" :key="type" :type="type" text icon="comment" class="bb-margin-bottom-4">
            This is a text alert with custom icon
          </Alert>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol size="12">
          <template v-for="type of types" :key="type">
            <Alert :type="type" inline icon class="bb-margin-bottom-4 bb-margin-right-4">
              This is an inline {{ type }} alert with default icon
            </Alert>

            <Alert :type="type" inline outline icon class="bb-margin-bottom-4">
              This is an inline outline {{ type }} alert with default icon
            </Alert>

            <br />
          </template>
        </GridCol>
      </GridRow>
    </Grid>
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
    <h2>Icons</h2>

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
import { Type } from "../src/core/enums/Type";

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
    const tooltipPosition = ref("left");
    const types = Object.values(Type);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    const toggleType = () => {
      type.value = type.value === "primary" ? "secondary" : "primary";
    };

    const randomProgress = () => {
      progress.value = random(0, 100);
    };

    const toggleTooltipPosition = () => {
      tooltipPosition.value = tooltipPosition.value === "left" ? "right" : "left";
    };

    const getRandomProgress = () => random(10, 90);

    return {
      toggleLoading,
      toggleType,
      toggleTooltipPosition,
      randomProgress,
      getRandomProgress,
      progress,
      loading,
      type,
      tooltipPosition,
      types,
      icons
    };
  }
});
</script>

<style lang="scss">
@use "../src/theming";

@include theming.all(
  $config: (
    prefix: "bb"
  )
);

body {
  margin: 4em;
}

.spacing {
  margin: 4em 0;
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
    align-items: center;
    width: 20%;
    font-size: 1.5em;
    padding-right: 1em;
    padding-bottom: 1em;

    .icons__icon__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1em;
      height: 1em;
      padding: 1.5em;
      border-radius: 100%;
      background: #f1f1f1;
    }

    span {
      display: block;
      font-size: 0.5em;
      margin-left: 1em;
    }
  }
}
</style>
