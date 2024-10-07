function SkillsIcon({size,color}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width = {`${size}`} height = {`${size}`} viewBox="0 0 24 24">
                          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            color="black">
                            <path className={`stroke-current ${color}`}
                              d="M7.5 10h-1c-1.414 0-2.121 0-2.56-.44C3.5 9.122 3.5 8.415 3.5 7s0-2.121.44-2.56C4.378 4 5.085 4 6.5 4h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56C9.622 10 8.915 10 7.5 10m-4-4H2m20 0h-1.5" />
                            <path className={`fill-current ${color}`}
                              d="m3.152 18.765l-.693.287zm1.083 1.083l-.287.693zm0-5.696l-.287-.693zm-1.083 1.083l-.693-.287zM21 14.75a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0-1.5zm-1 0a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0-1.5zM2.25 17c0 .456 0 .835.02 1.145c.022.317.069.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 3.75 17zM6 19.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.54-.198a2.75 2.75 0 0 0 1.488 1.489l.574-1.386a1.25 1.25 0 0 1-.677-.677zM6 13.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 6 14.75zM3.75 17c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435l-1.386-.574c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM21 13.25H6v1.5h15zm-15 7.5h15v-1.5H6zm14-1.5c-.224 0-.518-.136-.79-.545c-.27-.403-.46-1.004-.46-1.705h-1.5c0 .956.257 1.855.712 2.537c.451.677 1.157 1.213 2.038 1.213zM18.75 17c0-.701.19-1.302.46-1.705c.272-.41.566-.545.79-.545v-1.5c-.881 0-1.587.536-2.038 1.213c-.455.682-.712 1.581-.712 2.537z" />
                            <path className={`stroke-current ${color}`}
                              d="M16.5 10h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C19.622 4 18.915 4 17.5 4h-1c-1.414 0-2.121 0-2.56.44c-.44.439-.44 1.146-.44 2.56s0 2.121.44 2.56c.439.44 1.146.44 2.56.44m-3-4a1.5 1.5 0 0 0-3 0" />
                          </g>
                        </svg>
    );
}
export { SkillsIcon}