import { Component } from '@angular/core';
import { SelectItem, FilterService, FilterMatchMode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  products:any
  data:any
  constructor() { } 

  ngOnInit() { 
    this.products={
      "asset_id": "94fc0a78-b843-527e-9747-642575a10c17",
      "training_params": {
          "start_time": "2023-12-13T12:05:22.000+00:00",
          "end_time": "2023-12-15T12:05:22.000+00:00",
          "alert_multiplier": 1.5,
          "alarm_multiplier": 1.25
      },
      "calculate_auto_threshold": true,
      "spectrum_thresholds": [
          {
              "name": "Order 1",
              "acceleration_or_velocity": "acceleration",
              "hz_or_orders": "orders",
              "frequency_center": "1.1",
              "frequency_width_hz": 2,
              "alarm_type": "high",
              "threshold_info": {
                  "location_1": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor DE:Horizontal:1H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor DE:Vertical:1V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor DE:Axial:1A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  },
                  "location_2": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor NDE:Horizontal:2H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor NDE:Vertical:2V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor NDE:Axial:2A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  }
              }
          },
          {
              "name": "Order 2",
              "acceleration_or_velocity": "acceleration",
              "hz_or_orders": "orders",
              "frequency_center": "1.1",
              "frequency_width_hz": 2,
              "alarm_type": "high",
              "threshold_info": {
                  "location_1": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor DE:Horizontal:1H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor DE:Vertical:1V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor DE:Axial:1A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  },
                  "location_2": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor NDE:Horizontal:2H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor NDE:Vertical:2V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor NDE:Axial:2A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  }
              }
          }
      ],
      "component_thresholds": [
          {
              "name": "BPFO",
              "acceleration_or_velocity": "acceleration",
              "hz_or_orders": "orders",
              "frequency_center": "1.1",
              "frequency_width_hz": 2,
              "alarm_type": "high",
              "threshold_info": {
                  "location_1": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor DE:Horizontal:1H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor DE:Vertical:1V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor DE:Axial:1A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  },
                  "location_2": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor NDE:Horizontal:2H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor NDE:Vertical:2V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor NDE:Axial:2A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  }
              }
          }
      ],
      "summary_statistics": [
          {
              "name": "Velocity RMS",
              "data_type": "short_interval",
              "recalculate": true,
              "alarm_type": "high",
              "threshold_info": {
                  "location_1": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor DE:Horizontal:1H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor DE:Vertical:1V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor DE:Axial:1A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  },
                  "location_2": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor NDE:Horizontal:2H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor NDE:Vertical:2V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor NDE:Axial:2A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  }
              }
          },
          {
              "name": "Crest Factor",
              "data_type": "long_interval",
              "alarm_type": "high",
              "threshold_info": {
                  "location_1": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor DE:Horizontal:1H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor DE:Vertical:1V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor DE:Axial:1A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  },
                  "location_2": {
                      "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
                      "axis": {
                          "horizontal": {
                              "sensor_location": "Motor NDE:Horizontal:2H",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "vertical": {
                              "sensor_location": "Motor NDE:Vertical:2V",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          },
                          "axial": {
                              "sensor_location": "Motor NDE:Axial:2A",
                              "auto_manual_custom": "auto",
                              "enable_alarm": true,
                              "enable_alert": true,
                              "alarm_multiplier_type": "deafult",
                              "alarm_multiplier": 1.5,
                              "alert_multiplier": 1.25,
                              "alarm_value": 1,
                              "alert_value": 1,
                              "calculate_auto_threshold": true,
                              "training_stats": {}
                          }
                      }
                  }
              }
          }
      ]
  }
      
  } 

  onDelete1(index:any){
    if (index > -1) { 
      this.products.spectrum_thresholds.splice(index, 1); 
    }
  }
  onDelete2(index:any){
    if (index > -1) { 
      this.products.component_thresholds.splice(index, 1); 
    }
  }
  onDelete3(index:any){
    if (index > -1) { 
      this.products.summary_statistics.splice(index, 1); 
    }
  }
  onAdd1(){
    let row =  {
      "name": "Order 3",
      "acceleration_or_velocity": "acceleration",
      "hz_or_orders": "orders",
      "frequency_center": "1.1",
      "frequency_width_hz": 2,
      "alarm_type": "high",
      "threshold_info": {
          "location_1": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor DE:Horizontal:1H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor DE:Vertical:1V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor DE:Axial:1A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          },
          "location_2": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor NDE:Horizontal:2H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor NDE:Vertical:2V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor NDE:Axial:2A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          }
      }
  }
   
    this.products.spectrum_thresholds.push(row) ;
   
  }
  onAdd2(){
    let row =    {
      "name": "BPFO2",
      "acceleration_or_velocity": "acceleration",
      "hz_or_orders": "orders",
      "frequency_center": "1.1",
      "frequency_width_hz": 2,
      "alarm_type": "high",
      "threshold_info": {
          "location_1": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor DE:Horizontal:1H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor DE:Vertical:1V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor DE:Axial:1A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          },
          "location_2": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor NDE:Horizontal:2H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor NDE:Vertical:2V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor NDE:Axial:2A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          }
      }
  }
   
    this.products.component_thresholds.push(row) ;
   
  }

  onAdd3(){
    let row =     {
      "name": "Velocity RMS11",
      "data_type": "short_interval",
      "recalculate": true,
      "alarm_type": "high",
      "threshold_info": {
          "location_1": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor DE:Horizontal:1H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor DE:Vertical:1V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor DE:Axial:1A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          },
          "location_2": {
              "point_id": "a1ac0a78-b843-527e-9747-642575a10c17",
              "axis": {
                  "horizontal": {
                      "sensor_location": "Motor NDE:Horizontal:2H",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "vertical": {
                      "sensor_location": "Motor NDE:Vertical:2V",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  },
                  "axial": {
                      "sensor_location": "Motor NDE:Axial:2A",
                      "auto_manual_custom": "auto",
                      "enable_alarm": true,
                      "enable_alert": true,
                      "alarm_multiplier_type": "deafult",
                      "alarm_multiplier": 1.5,
                      "alert_multiplier": 1.25,
                      "alarm_value": 1,
                      "alert_value": 1,
                      "calculate_auto_threshold": true,
                      "training_stats": {}
                  }
              }
          }
      }
  }
   
    this.products.summary_statistics.push(row) ;
   
  }
} 
