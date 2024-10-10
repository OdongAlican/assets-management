import { IAsset } from "../../pages/assets/interface";

export const assetsMock: IAsset[] = [
    {
        id: 1,
        name: "Laptop A",
        category: "laptop",
        engravedNumber: "ENG-001",
        model: "XPS 15",
        serialNo: "SN-123456",
        ram: "16GB",
        cpuSpeed: "2.6GHz",
        hardDiskSize: "512GB",
        ipAddress: "192.168.1.10",
        macAddress: "00:1A:2B:3C:4D:5E",
        interfaceType: "USB-C",
        location: "Office A",
        status: "store",
        purchaseCost: "$1500",
        verificationDate: "2023-01-10",
        deploymentDate: "2023-01-15",
        costOfAsset: 1500,
        netValue: "$1200",
        depreciationRate: "20%",
        assignedTo: "Alice"
    },
    {
        id: 2,
        name: "Server B",
        category: "Servers",
        engravedNumber: "ENG-002",
        model: "PowerEdge R740",
        serialNo: "SN-789012",
        ram: "32GB",
        cpuSpeed: "3.0GHz",
        hardDiskSize: "2TB",
        ipAddress: "192.168.1.20",
        macAddress: "00:1A:2B:3C:4D:5F",
        interfaceType: "Ethernet",
        location: "Data Center",
        status: "use",
        purchaseCost: "$5000",
        verificationDate: "2022-05-15",
        deploymentDate: "2022-06-01",
        costOfAsset: 5000,
        netValue: "$4000",
        depreciationRate: "15%",
        assignedTo: "Bob"
    },
    {
        id: 3,
        name: "Monitor C",
        category: "monitor",
        engravedNumber: "ENG-003",
        model: "Dell UltraSharp",
        serialNo: "SN-345678",
        ipAddress: "192.168.1.30",
        macAddress: "00:1A:2B:3C:4D:60",
        location: "Office A",
        status: "dispose",
        purchaseCost: "$300",
        verificationDate: "2023-03-20",
        deploymentDate: "2023-03-25",
        costOfAsset: 300,
        netValue: "$250",
        depreciationRate: "10%",
        assignedTo: "Charlie"
    },
    {
        id: 4,
        name: "Router D",
        category: "Networking",
        engravedNumber: "ENG-004",
        model: "Cisco ISR 4000",
        serialNo: "SN-456789",
        ipAddress: "192.168.1.40",
        macAddress: "00:1A:2B:3C:4D:61",
        location: "Office B",
        status: "Active",
        purchaseCost: "$1200",
        verificationDate: "2023-02-10",
        deploymentDate: "2023-02-15",
        costOfAsset: 1200,
        netValue: "$900",
        depreciationRate: "25%",
        assignedTo: "Diana"
    },
    {
        id: 5,
        name: "Printer E",
        category: "Printers",
        engravedNumber: "ENG-005",
        model: "HP LaserJet Pro",
        serialNo: "SN-567890",
        ipAddress: "192.168.1.50",
        macAddress: "00:1A:2B:3C:4D:62",
        location: "Office A",
        status: "Active",
        purchaseCost: "$400",
        verificationDate: "2023-04-15",
        deploymentDate: "2023-04-20",
        costOfAsset: 400,
        netValue: "$300",
        depreciationRate: "12%",
        assignedTo: "Eve"
    },
    {
        id: 6,
        name: "Tablet F",
        category: "Tablets",
        engravedNumber: "ENG-006",
        model: "iPad Pro",
        serialNo: "SN-678901",
        ram: "8GB",
        cpuSpeed: "3.1GHz",
        ipAddress: "192.168.1.60",
        macAddress: "00:1A:2B:3C:4D:63",
        location: "Office C",
        status: "Active",
        purchaseCost: "$800",
        verificationDate: "2023-05-05",
        deploymentDate: "2023-05-10",
        costOfAsset: 800,
        netValue: "$600",
        depreciationRate: "18%",
        assignedTo: "Frank"
    },
    {
        id: 7,
        name: "Switch G",
        category: "Networking",
        engravedNumber: "ENG-007",
        model: "Cisco Catalyst 2960",
        serialNo: "SN-789123",
        ipAddress: "192.168.1.70",
        macAddress: "00:1A:2B:3C:4D:64",
        location: "Data Center",
        status: "Active",
        purchaseCost: "$1000",
        verificationDate: "2023-06-20",
        deploymentDate: "2023-06-25",
        costOfAsset: 1000,
        netValue: "$800",
        depreciationRate: "22%",
        assignedTo: "Grace"
    },
    {
        id: 8,
        name: "Desktop H",
        category: "Computers",
        engravedNumber: "ENG-008",
        model: "HP Elite",
        serialNo: "SN-890123",
        ram: "16GB",
        cpuSpeed: "3.2GHz",
        hardDiskSize: "1TB",
        ipAddress: "192.168.1.80",
        macAddress: "00:1A:2B:3C:4D:65",
        location: "Office B",
        status: "Active",
        purchaseCost: "$1200",
        verificationDate: "2023-07-10",
        deploymentDate: "2023-07-15",
        costOfAsset: 1200,
        netValue: "$950",
        depreciationRate: "15%",
        assignedTo: "Hannah"
    },
    {
        id: 9,
        name: "External HDD I",
        category: "Storage",
        engravedNumber: "ENG-009",
        model: "Seagate Expansion",
        serialNo: "SN-901234",
        hardDiskSize: "2TB",
        location: "Office C",
        status: "Active",
        purchaseCost: "$150",
        verificationDate: "2023-08-10",
        deploymentDate: "2023-08-15",
        costOfAsset: 150,
        netValue: "$100",
        depreciationRate: "30%",
        assignedTo: "Ian"
    },
    {
        id: 10,
        name: "Smartphone J",
        category: "Mobile Devices",
        engravedNumber: "ENG-010",
        model: "Samsung Galaxy S21",
        serialNo: "SN-234567",
        ram: "8GB",
        cpuSpeed: "2.9GHz",
        ipAddress: "192.168.1.90",
        macAddress: "00:1A:2B:3C:4D:66",
        location: "Office A",
        status: "Active",
        purchaseCost: "$900",
        verificationDate: "2023-09-10",
        deploymentDate: "2023-09-15",
        costOfAsset: 900,
        netValue: "$700",
        depreciationRate: "18%",
        assignedTo: "Jill"
    }
];
