
## 创建应用
```bash
mvn archetype:generate  \
    -DarchetypeGroupId=com.moorper \
    -DarchetypeArtifactId=mvn-archetype-aio \
    -DarchetypeVersion=1.0.0-SNAPSHOT \
    -DgroupId=com.moorper.demo \
    -DartifactId=aio \
    -Dversion=1.0.0-SNAPSHOT \
    -Dpackage=com.moorper.demo \
    -DinteractiveMode=false
```

## 项目架构

![COLA 架构](https://camo.githubusercontent.com/745a8c740aaa41b9e367d185a3b107a18a0d71e5d85a5721ee3f3ffc6212bb81/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303230313230393139323235383834302e706e67)