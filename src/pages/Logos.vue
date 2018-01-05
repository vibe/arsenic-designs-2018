<script>
import Layout from '../layouts/main.vue'
import HomeSelector from '../components/home-selector.vue'
import data from '../data/ui';
import VanillaTilt from "../libs/swag";

export default {
      head: {
    title: 'Arsenic.logos'
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
      images: [
        '01-Void',
        '02-Healthy Habits',
        '03-OCR',
        '04-JHurley Fitness',
        '05-Planetary',
        '06-AI'
      ],
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
          <div class="item" data-swag='rgba(51, 51, 51, 0.4)'>
            <img src={`/images/logos/${image}.png`}/>
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
    width: 33.333%;
  }
  .item {
    margin: 0 auto;
    position: relative;
    border-radius: 5px;
  }
  .item img {
    max-width: 100%;
    display: block;
    border-radius: 5px;
  }
    @media all and (max-width: 860px) {
    .root {
      width: 50%;
    }
  @media all and (max-width: 580px) {
    .root {
      width: 100%;
    }
  }
  }
</style>
