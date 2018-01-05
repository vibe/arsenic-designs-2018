<script>
import Layout from '../layouts/main.vue'
import HomeSelector from '../components/home-selector.vue'
import data from '../data/ui';
import VanillaTilt from "../libs/swag";

const hexToRGBA = (hex, opacity=1) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  const result = `rgba(${r}, ${g}, ${b}, ${opacity})`;
  return result;
}


export default {
      head: {
    title: 'Arsenic.ui'
  },
    mounted() {
    VanillaTilt.init(document.querySelectorAll(".item"), {
      max: 10,
      speed: 400,
      scale: 1.05,
      glare: true,
      "max-glare": 0.1
    });
  },
  data: function() {
    return {
      images: data.images,
    }
  },
  
  components: {
    Layout,
    HomeSelector
  },
  render(h) {
    return (
      <Layout>
        <div class="portfolio ui">
                { this.images.map(image => 
          <div class="root">
          <div class="item" data-swag={ hexToRGBA(image.hex, .4) }>
            <img src={`/images/ui/${image.image}`}/>
          </div>
          </div>
        )}
        </div>
      </Layout>
    )
  }
}
</script>


<style scoped>
  .portfolio {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .root {
    width: 25%;
    margin-bottom: 35px;
    padding: 25px;
  }
  .item {
    max-width: 280px;
    margin: 0 auto;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 2px 9px rgba(14, 21, 47, 0.25);
  }
  .item img {
    max-width: 100%;
    display: block;
    border-radius: 5px;
  }
  @media all and (max-width: 1080px) {
    .root {
      width: 33.3333%;
    }
  }
  @media all and (max-width: 750px) {
    .root {
      width: 50%;
    }
  }
  @media all and (max-width: 580px) {
    .root {
      width: 100%;
    }
  }
</style>
