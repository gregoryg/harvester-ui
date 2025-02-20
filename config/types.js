// --------------------------------------
// 1. Provided by Steve and always potentialy available
// --------------------------------------

// Standalone steve
// Base: /v1
export const STEVE = {
  PREFERENCE: 'userpreference',
  CLUSTER:    'cluster',
};

// Auth (via Norman)
// Base: /v3
export const NORMAN = {
  AUTH_CONFIG: 'authconfig',
  PRINCIPAL:   'principal',
  USER:        'user',
  TOKEN:        'token',
};

// Public (via Norman)
// Base: /v3-public
export const PUBLIC = { AUTH_PROVIDER: 'authprovider' };

// Common native k8s types (via Steve)
// Base: /k8s/clusters/<id>/v1/
export const API_GROUP = 'apiGroups';
export const CONFIG_MAP = 'configmap';
export const COUNT = 'count';
export const EVENT = 'event';
export const ENDPOINTS = 'endpoints';
export const HPA = 'autoscaling.horizontalpodautoscaler';
export const INGRESS = 'networking.k8s.io.ingress';
export const NAMESPACE = 'namespace';
export const NODE = 'node';
export const NETWORK_POLICY = 'networking.k8s.io.networkpolicy';
export const POD = 'pod';
export const PV = 'persistentvolume';
export const PVC = 'persistentvolumeclaim';
export const RESOURCE_QUOTA = 'resourcequota';
export const SCHEMA = 'schema';
export const SERVICE = 'service';
export const SECRET = 'secret';
export const SERVICE_ACCOUNT = 'serviceaccount';
export const STORAGE_CLASS = 'storage.k8s.io.storageclass';
export const OBJECT_META = 'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta';

export const RBAC = {
  ROLE:                 'rbac.authorization.k8s.io.role',
  CLUSTER_ROLE:         'rbac.authorization.k8s.io.clusterrole',
  ROLE_BINDING:         'rbac.authorization.k8s.io.rolebinding',
  CLUSTER_ROLE_BINDING: 'rbac.authorization.k8s.io.clusterrolebinding',
  GLOBAL_ROLE:          'management.cattle.io.globalrole',
  GLOBAL_ROLE_BINDING:  'management.cattle.io.globalrolebinding',
  SPOOFED:              { ROLE_TEMPLATE: 'rbac.authorization.k8s.io.roletemplate' }
};

export const WORKLOAD = 'workload';

// The types that are aggregated into a "workload"
export const WORKLOAD_TYPES = {
  DEPLOYMENT:             'apps.deployment',
  CRON_JOB:               'batch.cronjob',
  DAEMON_SET:             'apps.daemonset',
  JOB:                    'batch.job',
  STATEFUL_SET:           'apps.statefulset',
  REPLICA_SET:            'apps.replicaset',
  REPLICATION_CONTROLLER: 'replicationcontroller'
};

export const METRIC = {
  NODE: 'metrics.k8s.io.nodemetrics',
  POD:  'metrics.k8s.io.podmetrics',
};

export const CATALOG = {
  CLUSTER_REPO:   'catalog.cattle.io.clusterrepo',
  OPERATION:      'catalog.cattle.io.operation',
  APP:            'catalog.cattle.io.app',
  REPO:           'catalog.cattle.io.repo',
};

export const MONITORING = {
  ALERTMANAGER:   'monitoring.coreos.com.alertmanager',
  PODMONITOR:     'monitoring.coreos.com.podmonitor',
  PROMETHEUS:     'monitoring.coreos.com.prometheus',
  PROMETHEUSRULE: 'monitoring.coreos.com.prometheusrule',
  SERVICEMONITOR: 'monitoring.coreos.com.servicemonitor',
  THANOSRULER:    'monitoring.coreos.com.thanosruler',
  SPOOFED:        {
    RECEIVER:             'monitoring.coreos.com.receiver',
    RECEIVER_SPEC:        'monitoring.coreos.com.receiver.spec',
    RECEIVER_EMAIL:       'monitoring.coreos.com.receiver.email',
    RECEIVER_SLACK:       'monitoring.coreos.com.receiver.slack',
    RECEIVER_WEBHOOK:     'monitoring.coreos.com.receiver.webhook',
    RECEIVER_PAGERDUTY:   'monitoring.coreos.com.receiver.pagerduty',
    RECEIVER_OPSGENIE:    'monitoring.coreos.com.receiver.opsgenie',
    RECEIVER_HTTP_CONFIG: 'monitoring.coreos.com.receiver.httpconfig',
    RESPONDER:            'monitoring.coreos.com.receiver.responder',
    ROUTE:                'monitoring.coreos.com.route',
    ROUTE_SPEC:           'monitoring.coreos.com.route.spec',
  }
};

export const LONGHORN = {
  ENGINES:       'longhorn.io.engine',
  ENGINE_IMAGES: 'longhorn.io.engineimage',
  NODES:         'longhorn.io.node',
  REPLICAS:      'longhorn.io.replica',
  SETTINGS:      'longhorn.io.setting',
  VOLUMES:       'longhorn.io.volume',
};

// --------------------------------------
// 2. Only if Rancher is installed
// --------------------------------------

// Rancher Management API (via Steve)
// Base: /v1
export const MANAGEMENT = {
  AUTH_CONFIG:      'management.cattle.io.authconfig',
  CATALOG_TEMPLATE: 'management.cattle.io.catalogtemplate',
  CATALOG:          'management.cattle.io.catalog',
  CLUSTER:          'management.cattle.io.cluster',
  GROUP:            'management.cattle.io.group',
  NODE_POOL:        'management.cattle.io.nodepool',
  NODE_TEMPLATE:    'management.cattle.io.nodetemplate',
  PROJECT:          'management.cattle.io.project',
  SETTING:          'management.cattle.io.setting',
  USER:             'management.cattle.io.user',
  TOKEN:            'management.cattle.io.token',
};

export const CAPI = {
  CAPI_CLUSTER: 'cluster.x-k8s.io.cluster',
  RKE_CLUSTER:  'cluster.cattle.io.rkecluster',
  NODE_CONFIG:  'node-config.cattle.io',
  SPOOFED:      { NODE_CONFIG: 'node-config.cattle.io' }
};

// --------------------------------------
// 3. Optional add-on packages in a cluster
// --------------------------------------
// Base: /k8s/clusters/<id>/v1/

export const FLEET = {
  BUNDLE:        'fleet.cattle.io.bundle',
  CLUSTER:       'fleet.cattle.io.cluster',
  CLUSTER_GROUP: 'fleet.cattle.io.clustergroup',
  GIT_REPO:      'fleet.cattle.io.gitrepo',
  WORKSPACE:     'management.cattle.io.fleetworkspace',
  TOKEN:         'fleet.cattle.io.clusterregistrationtoken',
};

export const GATEKEEPER = {
  CONSTRAINT_TEMPLATE: 'templates.gatekeeper.sh.constrainttemplate',
  SPOOFED:             { CONSTRAINT: 'constraints.gatekeeper.sh.constraint' }
};

export const ISTIO = {
  VIRTUAL_SERVICE:  'networking.istio.io.virtualservice',
  DESTINATION_RULE:  'networking.istio.io.destinationrule',
  GATEWAY:          'networking.istio.io.gateway'
};

export const RIO = {
  CLUSTER_DOMAIN:   'admin.rio.cattle.io.clusterdomain',
  FEATURE:          'admin.rio.cattle.io.feature',
  INFO:             'admin.rio.cattle.io.rioinfo',
  PUBLIC_DOMAIN:    'admin.rio.cattle.io.publicdomain',

  APP:              'rio.cattle.io.app',
  EXTERNAL_SERVICE: 'rio.cattle.io.externalservice',
  STACK:            'rio.cattle.io.stack',
  ROUTER:           'rio.cattle.io.router',
  SERVICE:          'rio.cattle.io.service',

  SYSTEM_NAMESPACE: 'rio-system',
};

export const LOGGING = {
  // LOGGING:        'logging.banzaicloud.io.logging',
  CLUSTER_FLOW:   'logging.banzaicloud.io.clusterflow',
  CLUSTER_OUTPUT: 'logging.banzaicloud.io.clusteroutput',
  FLOW:           'logging.banzaicloud.io.flow',
  OUTPUT:         'logging.banzaicloud.io.output',
  SPOOFED:        {
    FILTERS:            'logging.banzaicloud.io.output.filters',
    FILTER:             'logging.banzaicloud.io.output.filter',
    CONCAT:             'logging.banzaicloud.io.output.filters.concat',
    DEDOT:              'logging.banzaicloud.io.output.filters.dedot',
    DETECTEXCEPTIONS:   'logging.banzaicloud.io.output.filters.detectExceptions',
    GEOIP:              'logging.banzaicloud.io.output.filters.geoip',
    GREP:               'logging.banzaicloud.io.output.filters.grep',
    PARSER:             'logging.banzaicloud.io.output.filters.parser',
    PROMETHEUS:         'logging.banzaicloud.io.output.filters.prometheus',
    RECORD_MODIFIER:    'logging.banzaicloud.io.output.filters.record_modifier',
    RECORD_TRANSFORMER: 'logging.banzaicloud.io.output.filters.record_transformer',
    STDOUT:             'logging.banzaicloud.io.output.filters.stdout',
    SUMOLOGIC:          'logging.banzaicloud.io.output.filters.sumologic',
    TAG_NORMALISER:     'logging.banzaicloud.io.output.filters.tag_normaliser',
    THROTTLE:           'logging.banzaicloud.io.output.filters.throttle',
    RECORD:             'logging.banzaicloud.io.output.filters.record',
    REGEXPSECTION:      'logging.banzaicloud.io.output.filters.regexpsection',
    EXCLUDESECTION:     'logging.banzaicloud.io.output.filters.excludesection',
    ORSECTION:          'logging.banzaicloud.io.output.filters.orsection',
    ANDSECTION:         'logging.banzaicloud.io.output.filters.andsection',
    PARSESECTION:       'logging.banzaicloud.io.output.filters.parsesection',
    METRICSECTION:      'logging.banzaicloud.io.output.filters.metricsection',
    REPLACE:            'logging.banzaicloud.io.output.filters.replace',
    SINGLEPARSESECTION: 'logging.banzaicloud.io.output.filters.replace.singleparsesection'
  }
};

export const BACKUP_RESTORE = {
  RESOURCE_SET: 'resources.cattle.io.resourceset',
  BACKUP:       'resources.cattle.io.backup',
  RESTORE:      'resources.cattle.io.restore',
};

export const CIS = {
  CLUSTER_SCAN:         'cis.cattle.io.clusterscan',
  CLUSTER_SCAN_PROFILE: 'cis.cattle.io.clusterscanprofile',
  BENCHMARK:            'cis.cattle.io.clusterscanbenchmark',
  REPORT:               'cis.cattle.io.clusterscanreport'

};

// vm
export const VM_TEMPLATE = {
  template: 'harvesterhci.io.virtualmachinetemplate',
  version:  'harvesterhci.io.virtualmachinetemplateversion'
};

export const VMI = 'kubevirt.io.virtualmachineinstance';
export const VMIM = 'kubevirt.io.virtualmachineinstancemigration';
export const VM = 'kubevirt.io.virtualmachine';
export const IMAGE = 'harvesterhci.io.virtualmachineimage';
export const SSH = 'harvesterhci.io.keypair';
export const NETWORK_ATTACHMENT = 'k8s.cni.cncf.io.networkattachmentdefinition';
export const DATA_VOLUME = 'cdi.kubevirt.io.datavolume';
export const HARVESTER_USER = 'harvesterhci.io.user';
export const HARVESTER_SETTING = 'harvesterhci.io.setting';
export const HARVESTER_UPGRADE = 'harvesterhci.io.upgrade';
export const HARVESTER_BACKUP = 'harvesterhci.io.virtualmachinebackup';
export const HARVESTER_RESTORE = 'harvesterhci.io.virtualmachinerestore';
export const HARVESTER_BACKUP_CONTENT = 'harvesterhci.io.virtualmachinebackupcontent';
export const HARVESTER_NODE_NETWORK = 'network.harvesterhci.io.nodenetwork';
export const HARVESTER_CLUSTER_NETWORK = 'network.harvesterhci.io.clusternetwork';
export const HARVESTER_SUPPORT_BUNDLE = 'harvesterhci.io.supportbundle';

// longhorn
export const LONGHORN_IO_ENGINE = 'longhorn.io.engine';
export const LONGHORN_IO_VOLUME = 'longhorn.io.volume';
