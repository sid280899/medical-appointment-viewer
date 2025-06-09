
from rest_framework import viewsets, filters
from .models import Doctor, Appointment
from .serializers import DoctorSerializer, AppointmentSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        queryset = Appointment.objects.all()
        doctor_id = self.request.query_params.get('doctor')
        status = self.request.query_params.get('status')
        if doctor_id:
            queryset = queryset.filter(doctor__id=doctor_id)
        if status:
            queryset = queryset.filter(status=status)
        return queryset
