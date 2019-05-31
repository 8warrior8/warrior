<template>
  <div class="control-main-div">
    <div class="control-row-div">
      <div class="control-left">控件名称</div>
      <div class="control-left-div">单向绑定</div>
      <div class="control-right-div">双向绑定</div>
      <div class="control-right">数据源</div>
    </div>
    <!-- input text -->
    <div class="control-row-div">
      <div class="control-left">input text</div>
      <div class="control-left-div">
        <input type="text" v-bind:value="inputValue" placeholder="单向绑定">
      </div>
      <div class="control-right-div">
        <input type="text" v-model="inputValue" placeholder="双向绑定">
      </div>
      <div class="control-right">[ {{inputValue}} ]</div>
    </div>
    <!-- input checkbox -->
    <div class="control-row-div">
      <div class="control-left">input checkbox</div>
      <div class="control-left-div">
        <input type="checkbox" id="a1" value="a1" v-bind:checked="getCheckboxStatus('a1')">
        <label for="a1">a1</label>
        <input type="checkbox" id="a2" value="a2" v-bind:checked="getCheckboxStatus('a2')">
        <label for="a2">a2</label>
        <input type="checkbox" id="a3" value="a3" v-bind:checked="getCheckboxStatus('a3')">
        <label for="a3">a3</label>
      </div>
      <div class="control-right-div">
        <input type="checkbox" id="a1" value="a1" v-model="checkedValue">
        <label for="a1">a1</label>
        <input type="checkbox" id="a2" value="a2" v-model="checkedValue">
        <label for="a2">a2</label>
        <input type="checkbox" id="a3" value="a3" v-model="checkedValue">
        <label for="a3">a3</label>
      </div>
      <div class="control-right">[ {{checkedValue}} ]</div>
    </div>
    <!-- input radio -->
    <div class="control-row-div">
      <div class="control-left">input radio</div>
      <div class="control-left-div">
        <input type="radio" name="r1" value="red" v-bind:checked="radioValue === 'red'"> red
        <input type="radio" name="r1" value="green" v-bind:checked="radioValue === 'green'"> green
      </div>
      <div class="control-right-div">
        <input type="radio" v-model="radioValue" value="red"> red
        <input type="radio" v-model="radioValue" value="green"> green
      </div>
      <div class="control-right">[ {{radioValue}} ]</div>
    </div>
    <!-- select -->
    <div class="control-row-div">
      <div class="control-left">select</div>
      <div class="control-left-div">
        <select class="select" v-bind:value="selected">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div class="control-right-div">
        <select class="select" v-model="selected">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div class="control-right">[ {{selected}} ]</div>
    </div>
    <!-- button -->
    <div class="control-row-div">
      <div class="control-left">button</div>
      <div class="control-left-div">
        <button v-on:click="clickFunc('确定')">确定</button>
      </div>
      <div class="control-right-div">
        <button v-on:click="clickFunc('取消')">取消</button>
      </div>
      <div class="control-right">[ {{buttonValue}} ]</div>
    </div>
    <!-- sample -->
    <div class="sample-div">
      <div class="sample-title-div">实例</div>
      <fieldset>
        <legend>Create New Person</legend>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" v-model="newPerson.name">
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="text" v-model="newPerson.age">
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <select v-model="newPerson.sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label></label>
          <button @click="createPerson">Create</button>
        </div>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person,index) in people">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.sex }}</td>
            <td :class="'text-center'">
              <button @click="deletePerson(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "me",
      checkedValue: ["a1", "a2"],
      radioValue: "red",
      getCheckboxStatus: function(v) {
        return this.checkedValue.find(a => a === v) ? true : false;
      },
      selected: "B",
      buttonValue: "",
      newPerson: {
        name: "",
        age: 0,
        sex: "Male"
      },
      people: [
        {
          name: "Jack",
          age: 30,
          sex: "Male"
        },
        {
          name: "Bill",
          age: 26,
          sex: "Male"
        },
        {
          name: "Tracy",
          age: 22,
          sex: "Female"
        },
        {
          name: "Chris",
          age: 36,
          sex: "Male"
        }
      ]
    };
  },
  name: "control",
  components: {
    
  },
  methods: {
    clickFunc: function(c) {
      this.buttonValue = c;
    },
    createPerson: function() {
      this.people.push(this.newPerson);
      // 添加完newPerson对象后，重置newPerson对象
      this.newPerson = { name: "", age: 0, sex: "Male" };
    },
    deletePerson: function(index) {
      // 删一个数组元素
      this.people.splice(index, 1);
    }
  },
  watch: {},
  computed: {},
  mounted() {}
};
</script>


<style>
.control-main-div {
  width: 100%;
}
.control-row-div {
  display: flex;
  line-height: 40px;
}
.control-left {
  width: 15%;
  font-weight: 600;
}
.control-left-div {
  width: 35%;
}

.control-right-div {
  width: 35%;
}

.control-right {
  width: 35%;
}

.select {
  width: 100px;
}

.sample-div {
  margin-top: 20px;
  margin-bottom: 40px;
}

.sample-title-div {
  font-weight: 600;
}

button {
	outline: none;
	padding: 5px 8px;
	color: #fff;
	border: 1px solid #BCBCBC;
	border-radius: 3px;
	background-color: #009A61;
	cursor: pointer;
}
button:hover{
	opacity: 0.8;
}

table,
td,
th {
	border-collapse: collapse;
	border-spacing: 0
}

table {
	width: 80%;
  margin-left: 10%;
}

td,
th {
	border: 1px solid #bcbcbc;
	padding: 5px 10px
}

th {
	background: #42b983;
	font-size: 1.2rem;
	font-weight: 400;
	color: #fff;
	cursor: pointer
}

tr:nth-of-type(odd) {
	background: #fff
}

tr:nth-of-type(even) {
	background: #eee
}

fieldset {
  width: 80%;
  margin-left: 10%;
	border: 1px solid #BCBCBC;
	padding: 0px;
}

.form-group {
	margin: 10px;
}

.form-group > label {
	display: inline-block;
	width: 5rem;
	text-align: right;
}

.form-group > input,
.form-group > select {
	display: inline-block;
	height: 1.5rem;
	line-height: 1.5rem;
}

.text-center{
	text-align: center;
}

</style>

