import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  Activity,
  BatteryCharging,
  Binary,
  Cable,
  CircuitBoard,
  Code2,
  Cpu,
  HardDrive,
  Radio,
  ScanLine,
  Usb,
  Wrench,
} from "lucide-react";

export const DATA = {
  name: "陈蓓琦",
  initials: "CBQ",
  url: "https://chenbeiqi-portfolio.vercel.app",
  location: "长春，中国",
  locationLink: "https://www.google.com/maps/place/Changchun",
  description:
    "嵌入式硬件 / 固件方向。关注原理图设计验证、PCBA 返修、BLE SoC 固件与传感器驱动调试。",
  summary:
    "吉林大学农业机械化及其自动化本科在读。具备原理图设计、DRC/BOM 核对、SMT/PCBA 返修、CAN 总线测试与 TLSR8250 BLE 固件开发经验。曾参与[物联网终端硬件原理图设计](/#work)、[车载控制 PCBA 返修与测试](/#work)，并完成[可穿戴光剂量测量模块固件开发](/#projects)。",
  avatarUrl: "/me.jpg",

  skills: [
    { name: "原理图设计", icon: CircuitBoard },
    { name: "DRC/BOM 核对", icon: ScanLine },
    { name: "示波器调试", icon: Activity },
    { name: "SMT/PCBA 返修", icon: Wrench },
    { name: "CAN 总线测试", icon: Cable },
    { name: "TLSR8250", icon: Cpu },
    { name: "BLE SDK", icon: Radio },
    { name: "I2C/SPI 驱动", icon: Usb },
    { name: "SPI Flash 存储", icon: HardDrive },
    { name: "CRC16/CRC32", icon: Binary },
    { name: "低功耗电源管理", icon: BatteryCharging },
    { name: "嵌入式 C", icon: Code2 },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "1762592407@qq.com",
    tel: "18269362506",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/你的用户名",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:1762592407@qq.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "柏川云数科技有限公司",
      href: "",
      badges: [],
      location: "中国",
      title: "硬件工程师",
      logoUrl: "/companies/baichuan.png",
      start: "2026.07",
      end: "2026.10",
      description:
        "承担物联网终端硬件原理图设计，完成整机电源树、电源模块、长按开关机控制电路及外围信号调理电路方案设计；完成功耗预算、上电浪涌、压降裕量、器件降额与接口防护评估，执行原理图 DRC 校验及 BOM 参数/封装一致性核对；参与 PCB 布局约束评审，基于示波器、万用表完成上电时序、纹波、浪涌与按键逻辑验证，依据原理图完成器件级/电路级故障定位。",
    },
    {
      company: "华耕科技有限公司",
      href: "",
      badges: [],
      location: "中国",
      title: "单片机助理工程师",
      logoUrl: "/companies/huageng.png",
      start: "2026.02",
      end: "2026.06",
      description:
        "承担车载控制 PCBA 手工焊接、元器件补焊与故障板返修，处理虚焊、连锡、短路及器件偏移等焊接缺陷；对接 SMT 批量生产，依据 BOM/位号图完成物料核对与贴片成品抽检；使用 CAN 分析仪抓取解析总线报文，定位硬件通信异常；维护硬件产品台账，实现生产、测试、出厂全批次物料可追溯。",
    },
    {
      company: "观学教育科技有限公司",
      href: "",
      badges: [],
      location: "中国",
      title: "硬件工程师（嵌入式固件/驱动）",
      logoUrl: "/companies/guanxue.png",
      start: "2025.09",
      end: "2026.01",
      description:
        "基于 TLSR8250 BLE SoC 开发光剂量测量模块固件：实现按键扫描、广播窗口管理、MTU/DLE 协商与 BLE 事件轮询调度；开发 VEML6030/LIS2DW12 传感器驱动，实现软件 I2C 共享总线、门控上电、100 ms 积分采样、双地址探测、三轴加速度读取及 9-clock 总线恢复；设计 12 B 定长记录与 SPI Flash 页缓存存储，实现自定义 BLE 命令与 CRC32 传输帧，基于 SPP Notify 发送记录并结合 TX FIFO 水位流控。",
    },
  ],

  education: [
    {
      school: "吉林大学",
      href: "https://www.jlu.edu.cn",
      degree: "本科 · 农业机械化及其自动化",
      logoUrl: "/schools/jlu.png",
      start: "2024.09",
      end: "至今",
    },
  ],

  projects: [
    {
      title: "可穿戴光剂量测量模块",
      href: "/projects/light-dose",
      dates: "2025.09 - 2026.01",
      active: true,
      description:
        "基于 TLSR8250 BLE SoC 的光剂量测量终端。完成 VEML6030/LIS2DW12 传感器驱动、12 B 定长记录与 SPI Flash 页缓存存储、自定义 BLE 命令与 CRC32 传输帧；实现按键扫描、MTU/DLE 协商、I2C 总线恢复与低电 RAM 缓存落盘。",
      technologies: [
        "TLSR8250",
        "VEML6030",
        "LIS2DW12",
        "SPI Flash",
        "BLE SDK",
        "I2C",
        "CRC16/CRC32",
        "C",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/light-dose",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/你的用户名/light-dose-module",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/light-dose/device.jpg",
      video: "",
    },
    {
      title: "车载控制 PCBA 返修与 CAN 总线测试",
      href: "",
      dates: "2026.02 - 2026.06",
      active: false,
      description:
        "承担车载控制 PCBA 手工焊接、元器件补焊与故障板返修；对接 SMT 批量生产，完成 BOM/位号核对与贴片成品抽检；使用 CAN 分析仪抓取解析总线报文，定位硬件通信异常。",
      technologies: ["SMT", "PCBA 返修", "CAN", "万用表", "示波器"],
      links: [],
      image: "/projects/pcba/pcba.jpg",
      video: "",
    },
    {
      title: "吉智无人驾驶方程式车队 · 电气组",
      href: "",
      dates: "2024.11 - 2025.11",
      active: false,
      description:
        "参与 EBS 电子制动系统方案设计与整车电气架构优化；负责电池箱组装、线束制作、LEM 霍尔传感器选型与接线调试；依据 FSAE 车检规则完成电气安全排查与整改。",
      technologies: ["FSAE", "EBS", "线束", "电气安全"],
      links: [],
      image: "/projects/fsae/fsae.jpg",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "“天鹏杯”第十届国际大学生智能农业装备创新大赛",
      dates: "国家级一等奖",
      location: "中国",
      description: "国家级一等奖",
      image: "/awards/national-first.png",
      links: [],
    },
    {
      title: "全国大学生数学竞赛",
      dates: "省级三等奖",
      location: "中国",
      description: "省级三等奖",
      image: "/awards/provincial-third.png",
      links: [],
    },
    {
      title: "校级荣誉",
      dates: "2024 - 至今",
      location: "吉林大学",
      description:
        "校级二等奖学金、院优秀学生、社会实践奖、社会工作奖、文体活动奖、道德风尚奖、学术科技奖；全国大学生先进成图技术与产品信息建模创新大赛校级三等奖。",
      image: "/awards/school-awards.png",
      links: [],
    },
  ],
} as const;