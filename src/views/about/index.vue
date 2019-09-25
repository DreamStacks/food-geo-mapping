<template>
  <div class="ds-about">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in aboutData"
        :key="item.date"
        :timestamp="item.date"
        placement="top">
        <el-card class="ds-about-card" :style="{ backgroundColor: aboutColorList[index] }">
          <h2>Version {{ item.version }}</h2>
          <ul class="ds-about-card-lists">
            <li
              v-for="li in item.list"
              :key="li"
              class="ds-about-card-li">
              {{ li }}
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import api from '@api/about'
export default {
  name: 'DsAbout',
  data() {
    return {
      aboutData: [],
      aboutColorList: ['rgba(104, 123, 209, 0.4)', 'rgba(204, 113, 77, 0.4)']
    }
  },
  created() {
    api.fetchChangeLog().then(res => {
      const changelog = this.base642Utf8(res.content).split('\n')
      this.aboutData = this.md2Object(changelog)
    })
  },
  methods: {
    base642Utf8(data) {
      return decodeURIComponent(escape(window.atob(data)))
    },
    md2Object(data) {
      let count = -1
      const list = []

      data.forEach(e => {
        if (e.includes('## [')) {
          count++
          list[count] = {}
          list[count].version = e.match(/\d.\d.\d/)[0]
          list[count].date = e.match(/....-..-../)[0]
        }
        if (e.includes('### [')) {
          list[count].subTitle = e.slice(4)
        }
        if (e.includes('* ')) {
          if (!list[count].list) list[count].list = []
          list[count].list.push(e.match(/\s.* /)[0])
        }
      })

      return list
    }
  }
}
</script>
<style lang="scss" scoped>
.ds-about {
  margin-top: 100px;
  text-align: left;
  &-card {
    border: 0;
    color: rgb(255, 255, 255);
    &-li {
      color: rgb(221, 221, 221);
      line-height: 24px;
      font-size: 18px;
    }
  }
}
</style>
