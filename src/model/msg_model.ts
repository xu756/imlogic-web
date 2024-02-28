// MsgMeta 消息元数据
interface MsgMeta {
  detailType: 'connect' | 'disconnect' | 'heartbeat';
  version: string; // 1.0
  interval?: number; // detailType=heartbeat 到下次心跳的间隔，单位：毫秒
}

// MsgContent 消息
interface MsgContent {
  detailType: 'private' | 'group' | 'broadcast';
  text?: string; // 文本消息
  imgUrl?: string; // 图片消息
  audioUrl?: string; // 音频消息
  videoUrl?: string; // 视频消息
}

// Message
interface Message {
  msgId: string; // 消息id uuid 前端生成
  device: 'pc' | 'mobile' | 'pad' | 'web' | 'other'; // 设备类型
  timestamp: number; // 消息时间戳
  params: Record<string, string>; // 消息参数
  action: 'send' | 'receive' | 'broadcast'; // 消息动作
  from: string; // 发送者 uuid
  to: string; // 接收者 uuid
  msgType: 'meta' | 'text' | 'image' | 'file' | 'audio' | 'video' | 'location' | 'custom'; // 消息类型
  msgMeta?: MsgMeta; // msgType = meta 时，此字段有值
  msgContent?: MsgContent;
}

export type { Message, MsgContent, MsgMeta };
