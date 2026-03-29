import{i as t}from"./index-CZzOof9l.js";const e={log:e=>t.post("/time",e).then(t=>t.data),getByTask:e=>t.get(`/time/task/${e}`).then(t=>t.data),delete:e=>t.delete(`/time/${e}`)};export{e as t};
