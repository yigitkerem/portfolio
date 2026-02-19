interface TitleBarProps {
  activePanel?: string
}

export default function TitleBar({ activePanel }: TitleBarProps) {
  const isOrigin = activePanel === 'origin'
  
  return (
    <div 
      className={`col-span-full border-b flex items-center px-4 gap-4 select-none ${
        isOrigin 
          ? 'bg-red-600 border-red-700' 
          : 'bg-[#111412] border-border'
      }`}
      style={isOrigin ? { backgroundColor: '#dc2626' } : {}}
    >
      <div className="flex gap-1.5">
        <div className={`w-2.5 h-2.5 rounded-full ${isOrigin ? 'bg-white' : 'bg-red'}`} />
        <div className={`w-2.5 h-2.5 rounded-full ${isOrigin ? 'bg-white' : 'bg-[#ffbd2e]'}`} />
        <div className={`w-2.5 h-2.5 rounded-full ${isOrigin ? 'bg-white' : 'bg-[#28c840]'}`} />
      </div>
      <div className={`text-[11px] ${isOrigin ? 'text-white' : 'text-muted'} tracking-wider flex-1 text-center`}>
        yko@skynux: ~
      </div>
      <div className={`text-[10px] ${isOrigin ? 'text-white' : 'text-green-dim'} tracking-widest`}>
        ● ONLINE
      </div>
    </div>
  )
}
