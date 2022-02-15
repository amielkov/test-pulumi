import * as aws from "@pulumi/aws";
const ssmValues = require("../ssm_values/dev1.json");


for (const [key, value] of Object.entries<string>(ssmValues)) {
    const foo = new aws.ssm.Parameter(key, {
        type: "String",
        value: value
    });

    console.log(foo)
}    