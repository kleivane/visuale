<template>
    <NodeTableElement  :healthy_nodes="service.healthy_nodes">
      <template v-slot:content>
          <tr v-for="(node,index) in service.nodes" :key="index">
            <td @click="nodeClicked(node)"> <NodeTrafficLight :node="node"/></td>
            <td @click="nodeClicked(node)">{{title(node) | truncateText(15)}}</td>
            <td @click="nodeClicked(node)"><NodeHealthStatus v-bind:healthy="node.is_healthy"/></td>
            <td @click="nodeClicked(node)"><NodeVersion v-bind:text-length="15" :health="node.health[0]"/></td>
            <td @click="nodeClicked(node)"><NodeUptime v-bind:shorten="true" :health="node.health[0]" /></td>
          </tr>
      </template>
      <template v-slot:modal>
        <Modal  v-if="showModal" :title="selectedNode.ip" @close="clearModal()">
          <NodeDetailedInfo :text="selectedNode"></NodeDetailedInfo>
        </Modal>
      </template>
    </NodeTableElement >
</template>

<script>
  import NodeTableElement from "./NodeList/NodeTableElement";
  import NodeDetailedInfo from "./NodeDetailedInfo";
  import NodeTrafficLight from "./NodeTrafficLight";
  import NodeUptime from "./NodeUptime";
  import Modal from "../../Modal";
  import NodeHealthStatus from "./NodeHealthStatus";
  import NodeVersion from "./NodeVersion";
    export default {
        name: "NodeList",
      components:{
        NodeTableElement,
        Modal,
        NodeDetailedInfo,
        NodeTrafficLight,
        NodeUptime,
        NodeHealthStatus,
        NodeVersion
      },
      data() {
        return {
          showModal: false,
          selectedNode: null
        }
      },
      methods:{
        title(node){
          if(node.hasOwnProperty('ip'))
            return node.ip;
          if(node.hasOwnProperty('name'))
            return node.name;
          return 'Missing'
        },
        nodeClicked(node){
          this.selectedNode = node;
          this.showModal = true;
        },
        clearModal(){
          this.selectedNode = null;
          this.showModal = false;
        }
      },
      props: {
        service: {
          required: true,
          type: Object
        }
      }
    }
</script>

<style scoped>

</style>
