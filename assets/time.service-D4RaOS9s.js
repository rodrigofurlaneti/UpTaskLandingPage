import{N as a}from"./index-BapLtB-l.js";const m={log:t=>a.post("/time",t).then(e=>e.data),getByTask:t=>a.get(`/time/task/${t}`).then(e=>e.data),delete:t=>a.delete(`/time/${t}`)};export{m as t};
