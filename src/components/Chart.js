import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export default function Chart(props) {
    const { forecast } = props
    return(
        <BarChart
            width={500}
            height={300}
            data={forecast}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="dateTxt" hide={true} />
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="temp" fill="#8884d8" name="Temp °C"/>
        </BarChart>
    )
}
